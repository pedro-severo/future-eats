import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

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

// TODO: Discover why typography config in createTheme function doesn't working in ThemeProvider component
const FontFamilyProvider = styled.div`
  font-family: ${({ theme }) => theme?.typography?.fontFamily};
`;

const ThemeUsage: React.FC<any> = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <StyledThemeProvider theme={{ ...customTheme }}>
        <FontFamilyProvider>{children}</FontFamilyProvider>
      </StyledThemeProvider>
    </ThemeProvider>
  );
};

export default ThemeUsage;
