"use client";

import { theme } from "@/styles/theme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
  children: ReactNode;
}

export function DefaultProviders({ children }: DefaultProvidersProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
