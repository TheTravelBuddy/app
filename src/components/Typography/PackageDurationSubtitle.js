import React from "react";
import { Text, useTheme } from "react-native-paper";

const PackageDurationSubtitle = ({ nights, days, style, ...props }) => {
  const theme = useTheme();

  return (
    <Text
      style={[styles.Title, theme.fonts.bold, style]}
      {...props}
    >{`${nights} Nights, ${days} Days`}</Text>
  );
};

const styles = {
  Title: {
    color: "#696969",
    fontSize: 12,
    lineHeight: 16,
  },
};

export default PackageDurationSubtitle;
