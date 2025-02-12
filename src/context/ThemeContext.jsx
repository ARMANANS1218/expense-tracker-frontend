// src/context/ThemeContext.jsx
import React, { createContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
        background: {
          default: mode === 'light' ? '#fafafa' : '#121212',
        },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              // In light mode, use your local background image responsively
              backgroundImage: mode === 'light' ? 'url(/bg. )' : 'none',
              backgroundSize: 'cover',         // Ensures the image covers the entire viewport
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',      // Centers the image
              backgroundAttachment: 'fixed',     // Optional: fixes the background during scroll
            },
          },
        },
      },
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};






