import React from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const DistanceSubtitle = ({ distance, style, ...props }) => {
  const theme = useTheme();

  return (
    <View style={[styles.TitleContainer, style]} {...props}>
      <Text style={[styles.Title, theme.fonts.bold]}>{`${distance} km `}</Text>
      <Text style={[styles.Title, theme.fonts.regular]}>from center</Text>
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
