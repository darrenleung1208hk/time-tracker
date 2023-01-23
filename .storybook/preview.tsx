// .storybook/preview.js
import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../src/themes";

/* snipped for brevity */

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const decorators = [withMuiTheme];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expaneded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
