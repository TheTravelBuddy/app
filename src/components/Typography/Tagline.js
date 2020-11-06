import React from "react-native";
import { Text, useTheme } from "react-native-paper";

const Tagline = ({ children, style, ...props }) => {
  const theme = useTheme();

  return (
    <Text
      style={[
        styles.Tagline,
        { color: theme.colors.textSecondary },
        theme.fonts.bold,
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = {
  Tagline: {
    fontSize: 24,
    lineHeight: 32,
    marginVertical: 8,
    letterSpacing: 0,
  },
};

export default Tagline;
