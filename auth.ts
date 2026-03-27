import NextAuth from "next-auth";
import { ZodError } from "zod";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/zod";
import { prisma } from "@/prisma/client";
import bcrypt from "bcrypt";

export const { handlers, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        user_username: {},
        user_password: {},
      },
      authorize: async (credentials) => {
        try {
          const { user_username, password } = await signInSchema.parseAsync(credentials);

          // Find user in database (login uses lowercase username from signIn schema)
          const user = await prisma.user.findUnique({ where: { user_username } });
          if (!user) {
            throw new Error("Invalid credentials.");
          }

          // Verify password with bcrypt
          const isValid = await bcrypt.compare(password, user.user_password);
          if (!isValid) {
            throw new Error("Invalid credentials.");
          }

          // Return user object with fullname and roleId
          return {
            user_id: user.user_id,
            user_username: user.user_username,
            user_fullName: user.user_fullName,
            user_roleId: user.user_roleId,
          };
        } catch (error) {
          if (error instanceof ZodError) {
            return null;
          }
          throw error;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
  async jwt({ token, user }) {
    if (user) {
      console.log("🔥 USER FROM AUTHORIZE:", user); // ✅ DEBUG

      token.id = user.id.toString();   // ✅ FIX
      token.user_username = user.user_username;
      token.user_fullName = user.user_fullName;
      token.user_roleId = user.user_roleId;
    }

    console.log("🔥 TOKEN:", token); // ✅ PRINT TOKEN

    return token;
  },

  async session({ session, token }) {
    console.log("🔥 TOKEN IN SESSION:", token); // ✅ DEBUG

    if (session.user) {
      session.user = {
        ...session.user,
        id: token.id as string,
        user_username: token.user_username as string,
        user_fullName: token.user_fullName as string,
        user_roleId: token.user_roleId as number,
      };
    }

    console.log("🔥 FINAL SESSION:", session); // ✅ PRINT SESSION

    return session;
  },
},
  pages: {
    signIn: "/login",
  },
});