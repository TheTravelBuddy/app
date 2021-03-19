import "react-native-gesture-handler";

import React from "react";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigator from "./Navigator";

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
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: "#5C3DA5",
    textSecondary: "#9D9BA6",
    textPrimary: "#342F46",
    ratingHigh: "#00C851",
    ratingMedium: "#FFBB33",
    ratingLow: "#FF0000",
    ratingNull: "#BEBEBE",
    star: "#F6C425",
  },
};

const App = () => (
  <SafeAreaProvider>
    <PaperProvider theme={theme}>
      <Navigator />
    </PaperProvider>
  </SafeAreaProvider>
);

export default App;
