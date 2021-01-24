import React from "react";
import { Paragraph as NativeParagraph } from "react-native-paper";

const Paragraph = ({ children, style, ...props }) => {
  return (
    <NativeParagraph style={[styles.Paragraph, style]} {...props}>
      {children}
    </NativeParagraph>
  );
};

const styles = {
  Paragraph: {
    opacity: 0.7,
  },
};

export default Paragraph;
