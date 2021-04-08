import React from "react";
import { Text, useTheme } from "react-native-paper";

const CardSubtitle = ({ children, bold }) => {
  const theme = useTheme();

  return (
    <Text
      style={[
        styles.Title,
        styles.Bold,
        bold ? theme.fonts.bold : theme.fonts.regular,
      ]}
    >
      {children}
    </Text>
  );
};

const styles = {
  Title: {
    color: "#696969",
    fontSize: 14,
    lineHeight: 16,
  },
  Bold: {
    color: "#888888",
  },
};

export default CardSubtitle;
