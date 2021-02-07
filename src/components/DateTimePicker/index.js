import React, { useCallback } from "react";
import { View } from "react-native";
import { Text, TextInput, TouchableRipple, useTheme } from "react-native-paper";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

import useToggle from "../../hooks/useToggle";

const DateTimePicker = ({
  value,
  onChange,
  mode = "date",
  label = "",
  disabled = false,
  style,
  ...props
}) => {
  const pickerVisible = useToggle();
  const theme = useTheme();

  const handleConfirm = useCallback(
    (date) => {
      pickerVisible.hide();
      onChange(date);
    },
    [pickerVisible, onChange]
  );

  const renderInputText = useCallback(
    () => (
      <TouchableRipple
        disabled={disabled}
        style={styles.TouchArea}
        onPress={pickerVisible.show}
      >
        <View>
          <Text
            style={[
              theme.fonts.regular,
              { color: theme.colors.text },
              styles.LabelText,
            ]}
          >
            {label}
          </Text>
          <View style={styles.ValueContainer}>
            <Text style={styles.ValueText}>
              {mode === "date"
                ? !value
                  ? "Select Date"
                  : moment(value || new Date()).format("DD/MM/YYYY")
                : !value
                ? "Select Time"
                : moment(value || new Date()).format("hh:mm A")}
            </Text>
          </View>
        </View>
      </TouchableRipple>
    ),
    [pickerVisible, value, disabled, mode, label, theme]
  );

  return (
    <>
      <View style={style}>
        <TextInput
          mode="flat"
          style={styles.TextInputShell}
          render={renderInputText}
        />
      </View>
      <DateTimePickerModal
        isVisible={pickerVisible.value}
        date={value || new Date()}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={pickerVisible.hide}
        {...props}
      />
    </>
  );
};

const styles = {
  TouchArea: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  LabelText: {
    fontSize: 12,
    paddingTop: 10,
    opacity: 0.5,
  },
  ValueContainer: {
    height: 32,
    paddingVertical: 4,
  },
  ValueText: {
    fontSize: 16,
  },
  TextInputShell: {
    height: 64,
  },
};

export default DateTimePicker;
