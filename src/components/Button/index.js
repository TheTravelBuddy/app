import React from "react";
import { Button as PaperButton, useTheme } from "react-native-paper";

const Button = ({ children, compact, contentStyle, labelStyle, ...props }) => {
  const theme = useTheme();

  return (
    <PaperButton
      {...props}
      contentStyle={
        compact ? contentStyle : [styles.BigButtonContainer, contentStyle]
      }
      labelStyle={
        compact
          ? labelStyle
          : [styles.BigButtonLabel, theme.fonts.medium, labelStyle]
      }
    >
      {children}
    </PaperButton>
  );
};

const styles = {
  BigButtonContainer: {
    height: 48,
  },
  BigButtonLabel: {
    fontSize: 16,
  },
};

export default Button;
