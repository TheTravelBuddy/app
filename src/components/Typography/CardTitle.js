import React from "react";
import { Text, useTheme } from "react-native-paper";

const Title = ({ children, style, ...props }) => {
  const theme = useTheme();

  return (
    <Text
      style={[styles.Title, theme.fonts.regular, style]}
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
    fontSize: 16,
    lineHeight: 24,
  },
};

export default Title;
