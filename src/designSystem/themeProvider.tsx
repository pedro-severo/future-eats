import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#ffffff",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

const ThemeUsage: React.FC<any> = ({ children }) => {
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};

export default ThemeUsage;
