"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

// Radix
import { Theme as RadixTheme } from "@radix-ui/themes";

// MUI
import { ThemeProvider, CssBaseline, StyledEngineProvider } from "@mui/material";
import muiTheme from "./mui-theme";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />

          <RadixTheme>
            {children}
          </RadixTheme>
        </ThemeProvider>
      </StyledEngineProvider>
    </SessionProvider>
  );
}
