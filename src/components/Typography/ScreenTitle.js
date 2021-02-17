import React from "react";
import { Text, useTheme } from "react-native-paper";

const ScreenTitle = ({ children, style, ...props }) => {
  const theme = useTheme();

  return (
    <Text
      style={[styles.Title, theme.fonts.bold, style]}
      numberOfLines={1}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = {
  Title: {
    color: "#4A4A4A",
    fontSize: 24,
    lineHeight: 28,
  },
};

export default ScreenTitle;
