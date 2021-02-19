import React from "react";
import { Text, useTheme } from "react-native-paper";

const CardSubtitle = ({ children }) => {
  const theme = useTheme();

  return <Text style={[styles.Title, theme.fonts.regular]}>{children}</Text>;
};

const styles = {
  Title: {
    color: "#696969",
    fontSize: 14,
    lineHeight: 16,
  },
};

export default CardSubtitle;
