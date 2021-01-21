import React from "react";
import { Caption, useTheme } from "react-native-paper";

const Label = ({ children, style, ...props }) => {
  const theme = useTheme();

  return (
    <Caption
      style={[
        styles.Title,
        { color: theme.colors.textSecondary },
        theme.fonts.regular,
        style,
      ]}
      {...props}
    >
      {children}
    </Caption>
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
