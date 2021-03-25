import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

import styles from "../../screens/styles";

import BottomModal from "../BottomModal";
import Button from "../Button";
import DateTimePicker from "../DateTimePicker";
import CardTitle from "../Typography/CardTitle";
import ModalTitle from "../Typography/ModalTitle";

import { useReactiveTextInput } from "../../hooks/useTextInput";
import { useReactiveDateTimePicker } from "../../hooks/useDateTimePicker";
import useToggle from "../../hooks/useToggle";
import API from "../../helpers/API";

const today = new Date();
const maxBookingDate = moment(today).add(1, "year").toDate();

const BookingFiltersModal = ({ visible, onDismiss, hotelId }) => {
  const checkInDate = useReactiveDateTimePicker(today);
  const noOfDays = useReactiveTextInput("1");
  const noOfRooms = useReactiveTextInput("1");
  const noOfAdults = useReactiveTextInput("1");
  const noOfChildren = useReactiveTextInput("0");
  const loading = useToggle(false);
  const { navigate } = useNavigation();

  return (
    <BottomModal {...{ visible, onDismiss }}>
      <ModalTitle>Booking Details</ModalTitle>
      <View style={styles.Section}>
        <CardTitle style={styles.SectionHeader}>Duration</CardTitle>
        <View style={styles.FormInputContainer}>
          <DateTimePicker
            dense
            {...checkInDate.props}
            style={styles.FormInputLeft}
            label="Check In"
            disabled={loading.value}
            maximumDate={maxBookingDate}
            minimumDate={today}
          />
          <TextInput
            dense
            label="Days"
            keyboardType="numeric"
            {...noOfDays.props}
            disabled={loading.value}
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
          keyboardType="numeric"
          disabled={loading.value}
          style={styles.FormInput}
        />
        <View style={styles.FormInputContainer}>
          <TextInput
            dense
            label="Adults"
            {...noOfAdults.props}
            keyboardType="numeric"
            disabled={loading.value}
            style={styles.FormInputLeft}
          />
          <TextInput
            dense
            label="Children"
            {...noOfChildren.props}
            keyboardType="numeric"
            disabled={loading.value}
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
            onPress={onDismiss}
            disabled={loading.value}
          >
            Cancel
          </Button>
          <Button
            compact
            mode="contained"
            style={styles.FormInputRight}
            disabled={loading.value}
            loading={loading.value}
            onPress={() => {
              loading.start();
              API({
                url: `/traveller/hotel/booking`,
                method: "post",
                params: { hotelId },
                data: {
                  date: checkInDate.value,
                  days: noOfDays.value,
                  rooms: noOfRooms.value,
                  adults: noOfAdults.value,
                  children: noOfChildren.value,
                },
              })
                .then((response) => {
                  console.log(response);
                  const { data: hotelBookingId } = response;
                  navigate("HotelBookingScreen", { hotelBookingId });
                })
                .catch(console.log)
                .finally(() => {
                  loading.stop();
                  onDismiss();
                });
            }}
          >
            Confirm
          </Button>
        </View>
      </View>
    </BottomModal>
  );
};

export default BookingFiltersModal;
