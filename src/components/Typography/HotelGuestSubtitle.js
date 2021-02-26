import React from "react";
import { Text, useTheme } from "react-native-paper";

const HotelGuestSubtitle = ({ adults, child, style, ...props }) => {
  const theme = useTheme();

  return (
    <Text
      style={[styles.Title, theme.fonts.regular, style]}
      {...props}
    >{`${adults}, ${child}`}</Text>
  );
};

const styles = {
  Title: {
    color: "#696969",
    fontSize: 12,
    lineHeight: 16,
  },
};

export default HotelGuestSubtitle;
