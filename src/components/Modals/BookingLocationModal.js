import React from "react";
import { View } from "react-native";

import BottomModal from "../BottomModal";
import Button from "../Button";
import Chip from "../Chip";
import ModalTitle from "../Typography/ModalTitle";
import CardTitle from "../Typography/CardTitle";

import { useBookingFilters } from "../../stores/BookingFilters";
import screenStyles from "../../screens/styles";

const cities = [
  { id: 0, name: "Mumbai" },
  { id: 1, name: "Delhi" },
  { id: 2, name: "Shimla" },
  { id: 3, name: "Jaipur" },
];

const BookingLocationModal = ({ visible, onDismiss }) => {
  const selectedCity = useBookingFilters((state) => state.city);
  const setCity = useBookingFilters((state) => state.setCity);

  return (
    <BottomModal {...{ visible, onDismiss }}>
      <ModalTitle>Where?</ModalTitle>
      <View style={screenStyles.Section}>
        <Button
          compact
          mode="outlined"
          icon="crosshairs-gps"
          style={styles.LocationSelector}
        >
          Current Location
        </Button>
      </View>
      <View style={screenStyles.Section}>
        <CardTitle style={screenStyles.SectionHeader}>
          Popular Destinations
        </CardTitle>
        <View style={styles.OtherLocationsContainer}>
          {cities.map((city) => (
            <Chip
              mode={selectedCity.id === city.id ? "contained" : "flat"}
              style={styles.LocationSelector}
              onPress={() => {
                setCity(city);
              }}
            >
              {city.name}
            </Chip>
          ))}
        </View>
      </View>
    </BottomModal>
  );
};

const styles = {
  LocationSelector: {
    margin: 4,
  },
  OtherLocationsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
};

export default BookingLocationModal;
