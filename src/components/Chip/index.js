import React from "react";
import { Chip as PaperChip, useTheme } from "react-native-paper";

const Chip = ({ style, children, mode = "contained", ...props }) => {
  const theme = useTheme();
  return (
    <PaperChip
      style={[
        mode === "contained" ? styles.FlatChip : styles.OutlinedChip,
        mode === "contained" && { backgroundColor: theme.colors.surface },
        style,
      ]}
      mode={mode === "outlined" ? "outlined" : "flat"}
      {...props}
    >
      {children}
    </PaperChip>
  );
};

const styles = {
  FlatChip: {
    elevation: 2,
    borderRadius: 6,
  },
  OutlinedChip: {
    borderRadius: 6,
  },
};

export default Chip;
