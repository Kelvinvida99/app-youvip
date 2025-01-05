import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purpleTheme } from "./purpleTheme";

interface ChildrenProps {
  children: React.ReactNode;
}

export const AppTheme = ({ children }: ChildrenProps) => {
  return(
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}