import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({

  palette: {
    primary: {
      main: '#b4f0b9',
      dark: '#d2fad7'

    },

  },
}
)
const MyApp: AppType = ({ Component, pageProps }) => {
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>;
};

export default api.withTRPC(MyApp);
