import React from "react";
import { Text, useTheme } from "react-native-paper";

const SectionSubtitle = ({ children, style, ...props }) => {
  const theme = useTheme();

  return (
    <Text style={[styles.SectionHeader, theme.fonts.bold, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = {
  SectionHeader: {
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: "#918a8a",
  },
};

export default SectionSubtitle;
