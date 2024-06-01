import { ThemeOptions } from "@mui/material";

export enum Theme {
  LIGHT = 'app_light_theme',
}

export const lightThemeOptions: ThemeOptions = {
  palette: {
    success: {
      main: "#00CC99"
    },
    error: {
      main: "#FC440F"
    }
  },
  typography: {
    fontFamily: "Roboto, sans-serif"
  }
}