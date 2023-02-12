import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import palette from "./palette";
import useSettings from "../hooks/useSettings";

const AppThemeProvider = ({ children }) => {
  const { themeMode } = useSettings();

  const themeOption = useMemo(
    () => ({
      palette: themeMode === "light" ? palette.light : palette.dark,
    }),
    [themeMode]
  );

  const theme = createTheme(themeOption);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

AppThemeProvider.propTypes = { children: PropTypes.node };

export default AppThemeProvider;
