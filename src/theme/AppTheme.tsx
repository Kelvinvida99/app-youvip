import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { darkTheme } from "./darkTheme";
import { ChildrenProps } from "../interfaces/children.interface";

export const AppTheme = ({ children }: ChildrenProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
