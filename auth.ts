import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,

  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        user_username: {},
        user_password: {},
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const { user_username, user_password } = credentials as {
          user_username: string;
          user_password: string;
        };


        console.log("user_username, user_password", user_username, user_password);

        const { prisma } = await import("./prisma/client");
        const bcryptModule = await import("bcrypt");
        const bcrypt = bcryptModule.default ?? bcryptModule;

        const user = await prisma.user.findUnique({
          where: { user_username },
        });
        console.log("User found:", user);

        if (!user) return null;

        const isValid = await bcrypt.compare(
          user_password,
          user.user_password
        );
        console.log("Password: ", isValid);

        if (!isValid) return null;

        return {
          id: user.user_id,
          user_id: user.user_id,
          user_username: user.user_username,
          user_fullName: user.user_fullName,
          user_roleId: user.user_roleId,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.user_id;
        token.user_id = user.user_id;
        token.user_username = user.user_username;
        token.user_fullName = user.user_fullName;
        token.user_roleId = user.user_roleId;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.user_id;
        session.user.user_id = token.user_id;
        session.user.user_username = token.user_username;
        session.user.user_fullName = token.user_fullName;
        session.user.user_roleId = token.user_roleId;
      }
      return session;
    },
  },
});