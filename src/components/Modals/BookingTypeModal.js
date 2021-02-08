import React from "react";
import { View } from "react-native";

import BottomModal from "../BottomModal";
import ModalTitle from "../Typography/ModalTitle";
import styles from "../../screens/styles";
import HotelSelectIllustration from "../../../assets/illustrations/HotelSelectIllustration.svg";
import PackageSelectIllustration from "../../../assets/illustrations/PackageSelectIllustration.svg";

import { bookingTypes, useBookingFilters } from "../../stores/BookingFilters";
import BookingTypeCard from "../Card/BookingTypeCard";

const BookingTypeModal = ({ visible, onDismiss }) => {
  const setBookingType = useBookingFilters((state) => state.setBookingType);

  return (
    <BottomModal {...{ visible, onDismiss }}>
      <ModalTitle>What?</ModalTitle>
      <View style={styles.Section}>
        <View style={{ flexDirection: "row" }}>
          <BookingTypeCard
            title="Hotel"
            renderIllustration={(props) => (
              <HotelSelectIllustration {...props} />
            )}
            onPress={() => {
              setBookingType("HOTEL");
              onDismiss();
            }}
          />
          <BookingTypeCard
            title="Package"
            renderIllustration={(props) => (
              <PackageSelectIllustration {...props} />
            )}
            onPress={() => {
              setBookingType("PACKAGE");
              onDismiss();
            }}
          />
        </View>
      </View>
    </BottomModal>
  );
};

export default BookingTypeModal;
