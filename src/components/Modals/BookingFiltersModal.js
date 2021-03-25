import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

import styles from "../../screens/styles";

import BottomModal from "../BottomModal";
import Button from "../Button";
import Picker from "../Picker";
import CardTitle from "../Typography/CardTitle";
import ModalTitle from "../Typography/ModalTitle";

import { useReactiveTextInput } from "../../hooks/useTextInput";
import { useReactivePicker } from "../../hooks/usePicker";

const BookingFiltersModal = ({ visible, onDismiss, filters }) => {
  const mood = useReactivePicker(filters.value?.travelMood);
  const minBudget = useReactiveTextInput(filters.value?.budget?.low);
  const maxBudget = useReactiveTextInput(filters.value?.budget?.high);

  return (
    <BottomModal {...{ visible, onDismiss }}>
      <ModalTitle>Filters</ModalTitle>
      <View style={styles.Section}>
        <CardTitle style={styles.SectionHeader}>Mood</CardTitle>
        <Picker
          dense
          label="Travel Mood"
          {...mood.props}
          items={[
            { value: "RELAX", label: "Relax" },
            { value: "ADVENTURE", label: "Adventure" },
            { value: "MIXED", label: "Mixed" },
          ]}
        />
      </View>
      <View style={styles.Section}>
        <CardTitle style={styles.SectionHeader}>Budget</CardTitle>
        <View style={styles.FormInputContainer}>
          <TextInput
            dense
            left={<TextInput.Affix text="₹ " />}
            label="Min"
            {...minBudget.props}
            keyboardType="number-pad"
            style={styles.FormInputLeft}
          />
          <TextInput
            dense
            left={<TextInput.Affix text="₹ " />}
            label="Max"
            {...maxBudget.props}
            keyboardType="number-pad"
            style={styles.FormInputRight}
          />
        </View>
      </View>
      <View style={styles.Section}>
        <View style={styles.FormInputContainer}>
          <Button
            compact
            mode="outlined"
            style={styles.FormInputLeft}
            onPress={() => {
              filters.clear();
            }}
          >
            Clear
          </Button>
          <Button
            compact
            mode="contained"
            style={styles.FormInputRight}
            onPress={() => {
              filters.setValue({
                travelMood: mood.value,
                budget: { low: minBudget.value, high: maxBudget.value },
              });
              onDismiss();
            }}
          >
            Save
          </Button>
        </View>
      </View>
    </BottomModal>
  );
};

export default BookingFiltersModal;
