import React from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const SearchPackagePriceSummary = ({ price, style, ...props }) => {
  const theme = useTheme();

  return (
    <View style={[styles.TitleContainer, style]} {...props}>
      <Text style={[styles.price, theme.fonts.bold]}>{`₹${price}`}</Text>
      <Text style={[styles.Title, theme.fonts.regular]}>/person</Text>
    </View>
  );
};

const styles = {
  TitleContainer: {
    flexDirection: "row",
  },
  price: {
    color: "#5C3DA5",
    fontSize: 28,
    lineHeight: 32,
  },
  Title: {
    color: "#696969",
    fontSize: 14,
    lineHeight: 32,
  },
};

export default SearchPackagePriceSummary;
