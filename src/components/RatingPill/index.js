import React from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const RatingPill = ({ rating, style, ...props }) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.PillContainer,
        {
          backgroundColor: !rating
            ? theme.colors.ratingNull
            : rating >= 4
            ? theme.colors.ratingHigh
            : rating >= 3
            ? theme.colors.ratingMedium
            : theme.colors.ratingLow,
        },
        style,
      ]}
      {...props}
    >
      <Text style={[styles.PillText, theme.fonts.bold]}>
        {rating ? rating.toFixed(1) : "-"}
      </Text>
    </View>
  );
};

const styles = {
  PillContainer: {
    width: 48,
    height: 22,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  PillText: {
    color: "#ffffff",
    fontSize: 12,
  },
};

export default RatingPill;
