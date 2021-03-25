import React from "react";
import { View } from "react-native";
import Geolocation from "react-native-geolocation-service";

import BottomModal from "../BottomModal";
import Button from "../Button";
import Chip from "../Chip";
import ModalTitle from "../Typography/ModalTitle";
import CardTitle from "../Typography/CardTitle";
import screenStyles from "../../screens/styles";
import { haversineDistance } from "../../helpers/distance";
import { askLocationPermission } from "../../helpers/permission";

const BookingLocationModal = ({
  visible,
  onDismiss,
  cities,
  city: selectedCity,
}) => {
  return (
    <BottomModal {...{ visible, onDismiss }}>
      <ModalTitle>Select City</ModalTitle>
      <View style={screenStyles.Section}>
        <Button
          compact
          mode="outlined"
          icon="crosshairs-gps"
          onPress={async () => {
            if (!cities) return;

            if (!askLocationPermission()) return;

            Geolocation.getCurrentPosition(({ coords }) => {
              selectedCity.setValue(
                cities
                  .map((city) => ({
                    ...city,
                    distance: haversineDistance(city, coords),
                  }))
                  .sort(({ distance: a }, { distance: b }) => a - b)[0]
              );
            }, console.warn);
          }}
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
          {cities?.map((city) => (
            <Chip
              key={city.id}
              mode={selectedCity.value.id === city.id ? "contained" : "flat"}
              style={styles.LocationSelector}
              onPress={() => {
                selectedCity.setValue(city);
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
