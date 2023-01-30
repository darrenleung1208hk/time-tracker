import { Theme } from "@mui/material";

export default {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: "8px",
        paddingTop: "8px",
        paddingBottom: "8px",
        paddingLeft: "24px",
        paddingRight: "24px",
      },
    },
  },
  MuiBottomNavigationAction: {
    defaultProps: {
      disableTouchRipple: true,
    },
    styleOverrides: {
      label: ({ theme }: { theme: Theme }) => ({
        marginTop: theme.spacing(1),
      }),
    },
  },
};
