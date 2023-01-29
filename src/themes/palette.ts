const COLORS = {
  black: "#000000",
  white: "#FFFFFF",

  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923",
  },

  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B",
  },

  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532",
  },

  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666",
  },
};

export default {
  primary: {
    light: COLORS.green[100],
    main: COLORS.green[400],
    dark: COLORS.green[700],
    contrastText: COLORS.white,
  },
  secondary: {
    light: COLORS.cyan[100],
    main: COLORS.cyan[400],
    dark: COLORS.cyan[700],
    contrastText: COLORS.white,
  },
  error: {
    light: COLORS.red[100],
    main: COLORS.red[400],
    dark: COLORS.red[700],
  },
};
