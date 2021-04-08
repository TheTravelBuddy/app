import React from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const DistanceSubtitle = ({
  distance,
  style,
  fromCurrentLocation,
  ...props
}) => {
  const theme = useTheme();

  return (
    <View style={[styles.TitleContainer, style]} {...props}>
      <Text style={[styles.Title, theme.fonts.bold]}>{`${
        Math.ceil(distance * 10) / 10
      } km `}</Text>
      <Text style={[styles.Title, theme.fonts.regular]}>
        {fromCurrentLocation ? "from you" : "from center"}
      </Text>
    </View>
  );
};

const styles = {
  TitleContainer: {
    flexDirection: "row",
  },
  Title: {
    color: "#696969",
    fontSize: 12,
    lineHeight: 16,
  },
};

export default DistanceSubtitle;
