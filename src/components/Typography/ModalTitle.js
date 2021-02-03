import React from "react";
import { Headline as PaperHeadline, useTheme } from "react-native-paper";

const ModalTitle = ({ children, style, ...props }) => {
  const theme = useTheme();

  return (
    <PaperHeadline
      style={[styles.Headline, theme.fonts.bold, style]}
      {...props}
    >
      {children}
    </PaperHeadline>
  );
};

const styles = {
  Headline: {
    color: "#747487",
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: 0,
  },
};

export default ModalTitle;
