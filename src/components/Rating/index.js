import React from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const Rating = ({ rating }) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            rating >= 4
              ? theme.colors.ratingHigh
              : rating >= 3
              ? theme.colors.ratingMedium
              : theme.colors.ratingLow,
        },
      ]}
    >
      <Text style={[styles.rate, theme.fonts.medium]}>{rating}</Text>
    </View>
  );
};

const styles = {
  container: {
    width: 48,
    height: 22,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  rate: {
    color: "#ffffff",
    fontSize: 12,
  },
};

export default Rating;
