import React from "react";
import { Text, useTheme } from "react-native-paper";

const Title = ({ children, style, ...props }) => {
  const theme = useTheme();

  return (
    <Text style={[styles.SectionHeader, theme.fonts.regular, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = {
  SectionHeader: {
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: "#7b7b7b",
  },
};

export default Title;
