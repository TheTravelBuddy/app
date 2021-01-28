import React from "react";
import { Chip as PaperChip, useTheme } from "react-native-paper";

const Chip = ({ style, children, ...props }) => {
  const theme = useTheme();
  return (
    <PaperChip
      style={[
        styles.ChipContainer,
        { backgroundColor: theme.colors.surface },
        style,
      ]}
      {...props}
    >
      {children}
    </PaperChip>
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

export default Chip;
