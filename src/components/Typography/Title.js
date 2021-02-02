import React from "react";
import { Title as PaperTitle, useTheme } from "react-native-paper";

const Title = ({ children, style, ...props }) => {
  const theme = useTheme();

  return (
    <PaperTitle
      style={[
        styles.Title,
        { color: theme.colors.textPrimary },
        theme.fonts.bold,
        style,
      ]}
      {...props}
    >
      {children}
    </PaperTitle>
  );
};

const styles = {
  Title: {
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: 0,
    textAlign: "center",
  },
};

export default Title;
