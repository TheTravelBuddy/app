import React from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const DistanceSubtitle = ({ distance, style, ...props }) => {
  const theme = useTheme();

  return (
    <View style={styles.TitleContainer}>
      <Text
        style={[styles.Title, theme.fonts.bold, style]}
        numberOfLines={1}
        {...props}
      >
        {`${distance} Km `}
      </Text>
      <Text
        style={[styles.Title, theme.fonts.regular, style]}
        numberOfLines={1}
        {...props}
      >
        from center
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
