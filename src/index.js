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
    primary: "#6C63FF",
    primaryDark: "#4B45B2",
    accent: "#FF7364",
    greyDark: "#696969",
    grey: "#AAAAAA",
    greyLight: "#B2B2B2",
    greyPrimary: "#3F3D56",
  },
};

const App = () => (
  <PaperProvider theme={theme}>
    <Navigator />
  </PaperProvider>
);

export default App;
