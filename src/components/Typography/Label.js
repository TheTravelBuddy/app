import React from "react";
import { Caption as PaperCaption, useTheme } from "react-native-paper";

const Label = ({ children, style, ...props }) => {
  const theme = useTheme();

  return (
    <PaperCaption
      style={[
        styles.Title,
        { color: theme.colors.textSecondary },
        theme.fonts.regular,
        style,
      ]}
      {...props}
    >
      {children}
    </PaperCaption>
  );
};

const styles = {
  Title: {
    fontSize: 16,
    lineHeight: 18,
    marginVertical: 8,
    letterSpacing: 0.15,
  },
};

export default Label;
