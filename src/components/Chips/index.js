import React from "react";
import { Chip, useTheme } from "react-native-paper";

const Chips = ({ chipIcon, chipText, style }) => {
  const theme = useTheme();
  return (
    <Chip
      style={[
        styles.ChipContainer,
        {
          backgroundColor: theme.colors.surface,
        },
        style,
      ]}
      icon={chipIcon}
      onPress={() => console.log("Pressed")}
    >
      {chipText}
    </Chip>
  );
};

const styles = {
  ChipContainer: {
    elevation: 2,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Chips;
