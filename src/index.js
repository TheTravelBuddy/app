import "react-native-gesture-handler";

import React from "react";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

import Navigator from "./Navigator";
import { AuthProvider } from "./stores/Auth";

const fontConfig = {
  default: {
    light: {
      fontFamily: "Poppins-Light",
      fontWeight: "light",
    },
    regular: {
      fontFamily: "Poppins-Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Poppins-Medium",
      fontWeight: "500",
    },
    bold: {
      fontFamily: "Poppins-Bold",
      fontWeight: "bold",
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: "#5C3DA5",
    textSecondary: "#9D9BA6",
    textPrimary: "#342F46",
  },
};

const App = () => (
  <PaperProvider theme={theme}>
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  </PaperProvider>
);

export default App;
