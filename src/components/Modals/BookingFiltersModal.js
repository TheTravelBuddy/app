import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

import styles from "../../screens/styles";

import BottomModal from "../BottomModal";
import Button from "../Button";
import Picker from "../Picker";
import DateTimePicker from "../DateTimePicker";
import CardTitle from "../Typography/CardTitle";
import ModalTitle from "../Typography/ModalTitle";

import { useBookingFilters } from "../../stores/BookingFilters";

import { useReactiveTextInput } from "../../hooks/useTextInput";
import { useReactivePicker } from "../../hooks/usePicker";
import { useReactiveDateTimePicker } from "../../hooks/useDateTimePicker";

const today = new Date();
const initialDate = new Date(1900, 0, 2);

const BookingFiltersModal = ({ visible, onDismiss }) => {
  const filterValues = useBookingFilters((state) => state.filterValues);
  const setFilters = useBookingFilters((state) => state.setFilters);
  const clearFilters = useBookingFilters((state) => state.clearFilters);

  const mood = useReactivePicker(filterValues.travelMood);
  const checkInDate = useReactiveDateTimePicker(filterValues.date);
  const noOfDays = useReactiveTextInput(filterValues.days);
  const noOfRooms = useReactiveTextInput(filterValues.booking?.rooms);
  const noOfAdults = useReactiveTextInput(filterValues.booking?.adults);
  const noOfChildren = useReactiveTextInput(filterValues.booking?.children);
  const minBudget = useReactiveTextInput(filterValues.budget?.low);
  const maxBudget = useReactiveTextInput(filterValues.budget?.high);

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
        <CardTitle style={styles.SectionHeader}>Duration</CardTitle>
        <View style={styles.FormInputContainer}>
          <DateTimePicker
            dense
            {...checkInDate.props}
            style={styles.FormInputLeft}
            label="Check In "
            maximumDate={today}
            minimumDate={initialDate}
          />
          <TextInput
            dense
            label="No of days"
            {...noOfDays.props}
            style={styles.FormInputRight}
          />
        </View>
      </View>
      <View style={styles.Section}>
        <CardTitle style={styles.SectionHeader}>Rooms & Guests</CardTitle>
        <TextInput
          dense
          label="Rooms"
          {...noOfRooms.props}
          keyboardType="number-pad"
          style={styles.FormInput}
        />
        <View style={styles.FormInputContainer}>
          <TextInput
            dense
            label="Adults"
            {...noOfAdults.props}
            keyboardType="number-pad"
            style={styles.FormInputLeft}
          />
          <TextInput
            dense
            label="Children"
            {...noOfChildren.props}
            keyboardType="number-pad"
            style={styles.FormInputRight}
          />
        </View>
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
              clearFilters();
            }}
          >
            Clear
          </Button>
          <Button
            compact
            mode="contained"
            style={styles.FormInputRight}
            onPress={() => {
              setFilters({
                travelMood: mood.value,
                date: checkInDate.value,
                booking: {
                  rooms: noOfRooms.value,
                  adults: noOfAdults.value,
                  children: noOfChildren.value,
                },
                numberOfDays: noOfDays.value,
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
