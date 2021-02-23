import React from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const HotelPriceSummary = ({ price, style, ...props }) => {
  const theme = useTheme();

  return (
    <View style={[styles.TitleContainer, style]} {...props}>
      <Text style={[styles.Title, theme.fonts.bold]}>{`₹${price}`}</Text>
      <Text style={[styles.Title, theme.fonts.regular]}>/night</Text>
    </View>
  );
};

const styles = {
  TitleContainer: {
    flexDirection: "row",
  },
  Title: {
    color: "#696969",
    fontSize: 14,
    lineHeight: 18,
  },
};

export default HotelPriceSummary;
