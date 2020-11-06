import "react-native-gesture-handler";

import React from "react";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

import Navigator from "./Navigator";

const fontConfig = {
  default: {
    light: {
      fontFamily: "Poppins-Light",
      fontWeight: "normal",
    },
    regular: {
      fontFamily: "Poppins-Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Poppins-Medium",
      fontWeight: "normal",
    },
    bold: {
      fontFamily: "Poppins-Bold",
      fontWeight: "normal",
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
    <Navigator />
  </PaperProvider>
);

export default App;
