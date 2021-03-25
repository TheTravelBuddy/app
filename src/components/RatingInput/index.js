import React from "react";
import { View } from "react-native";
import { useTheme, IconButton } from "react-native-paper";

const RatingInput = ({ value, onValueChange, style }) => {
  const theme = useTheme();
  return (
    <View style={[styles.RatingContainer, style]}>
      {Array.from({ length: 5 }, (_, i) => i).map((i) => (
        <IconButton
          size={28}
          style={styles.RatingActionsIcon}
          icon={value && value > i ? "star" : "star-outline"}
          color={
            value && value > i ? theme.colors.star : theme.colors.textSecondary
          }
          onPress={() => {
            onValueChange(i + 1);
          }}
        />
      ))}
    </View>
  );
};

const styles = {
  RatingContainer: {
    flexDirection: "row",
  },
  RatingActionsIcon: {
    margin: -4,
  },
};

export default RatingInput;
