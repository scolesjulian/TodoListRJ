import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#1E90FF",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: 10,
  },
});
