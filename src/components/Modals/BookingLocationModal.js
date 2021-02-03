import React from "react";
import { View } from "react-native";

import { BottomModal, CardTitle, Chip } from "..";

import { useBookingFilters } from "../../stores/BookingFilters";

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
      <CardTitle>Select Location</CardTitle>
      <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Chip mode="outlined" icon="crosshairs-gps" style={{ margin: 4 }}>
          Current Location
        </Chip>
        {cities.map((city) => (
          <Chip
            mode={selectedCity.id === city.id ? "outlined" : "flat"}
            style={{ margin: 4 }}
            onPress={() => {
              setCity(city);
              onDismiss();
            }}
          >
            {city.name}
          </Chip>
        ))}
      </View>
    </BottomModal>
  );
};

export default BookingLocationModal;
