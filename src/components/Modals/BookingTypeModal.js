import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";

import styles from "../../screens/styles";

import { BottomModal, CardTitle } from "..";
import {
  bookingTypeIllutrations,
  useBookingFilters,
} from "../../stores/BookingFilters";

const BookingTypeModal = ({ visible, onDismiss }) => {
  const setBookingType = useBookingFilters((state) => state.setBookingType);

  return (
    <BottomModal {...{ visible, onDismiss }}>
      <CardTitle>Select Booking Type</CardTitle>
      <View style={styles.Section}>
        <View style={styles.FormInputContainer}>
          <Card
            style={styles.FormInputLeft}
            onPress={() => {
              setBookingType("HOTEL");
              onDismiss();
            }}
          >
            <Card.Cover source={{ uri: bookingTypeIllutrations.HOTEL }} />
            <Card.Title title="Hotel" />
          </Card>
          <Card
            style={styles.FormInputRight}
            onPress={() => {
              setBookingType("PACKAGE");
              onDismiss();
            }}
          >
            <Card.Cover source={{ uri: bookingTypeIllutrations.PACKAGE }} />
            <Card.Title title="Package" />
          </Card>
        </View>
      </View>
    </BottomModal>
  );
};

export default BookingTypeModal;
