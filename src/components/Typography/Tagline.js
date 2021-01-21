import React from "react";
import { Title as PaperTagline, useTheme } from "react-native-paper";

const Tagline = ({ children, style, ...props }) => {
  const theme = useTheme();

  return (
    <PaperTagline
      style={[
        styles.Tagline,
        { color: theme.colors.textSecondary },
        theme.fonts.bold,
        style,
      ]}
      {...props}
    >
      {children}
    </PaperTagline>
  );
};

const styles = {
  Tagline: {
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: "center",
  },
};

export default Tagline;
