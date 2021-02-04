import React from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const SearchPriceSummary = ({ price, style, ...props }) => {
  const theme = useTheme();

  return (
    <View style={styles.TitleContainer}>
      <Text
        style={[styles.price, theme.fonts.medium, style]}
        numberOfLines={1}
        {...props}
      >
        {`₹${price}`}
      </Text>
      <Text
        style={[styles.Title, theme.fonts.regular, style]}
        numberOfLines={1}
        {...props}
      >
        /night
      </Text>
    </View>
  );
};

const styles = {
  TitleContainer: {
    flexDirection: "row",
  },
  price: {
    color: "#5C3DA5",
    fontSize: 22,
    lineHeight: 28,
  },
  Title: {
    color: "#696969",
    fontSize: 14,
    lineHeight: 28,
  },
};

export default SearchPriceSummary;
