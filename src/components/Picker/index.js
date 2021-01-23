import React, { useCallback } from "react";
import { View } from "react-native";
import { Picker as NativePicker } from "@react-native-community/picker";
import { TextInput, Text, useTheme } from "react-native-paper";

const Picker = ({
  value,
  onValueChange,
  items,
  label = "",
  disabled = false,
  style,
  inputStyle,
  pickerStyle,
  ...props
}) => {
  const theme = useTheme();

  const renderInputText = useCallback(
    () => (
      <>
        <Text
          style={[
            theme.fonts.regular,
            { color: theme.colors.text },
            styles.Label,
          ]}
        >
          {label}
        </Text>
        <NativePicker
          enabled={!disabled}
          style={[styles.NativePicker, pickerStyle]}
          mode="dropdown"
          selectedValue={value}
          onValueChange={onValueChange}
        >
          {items.map((item) => (
            <NativePicker.Item key={item.value} {...item} />
          ))}
        </NativePicker>
      </>
    ),
    [label, value, items, disabled, theme, pickerStyle, onValueChange]
  );

  return (
    <View style={style}>
      <TextInput
        mode="flat"
        style={[styles.TextInputShell, inputStyle]}
        render={renderInputText}
        {...{ disabled }}
        {...props}
      />
    </View>
  );
};

const styles = {
  Label: {
    fontSize: 12,
    paddingTop: 10,
    paddingHorizontal: 10,
    opacity: 0.5,
  },
  NativePicker: {
    marginLeft: 2,
    height: 32,
  },
  TextInputShell: {
    height: 64,
  },
};

export default Picker;
