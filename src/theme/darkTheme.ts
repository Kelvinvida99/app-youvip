import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#f00',
      },
      secondary: {
        main: '#282828',
      },
      error: {
        main: red.A400,
      }
    }
})