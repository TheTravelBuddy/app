import React from "react";
import { View } from "react-native";

import BottomModal from "../BottomModal";
import ModalTitle from "../Typography/ModalTitle";
import screenStyles from "../../screens/styles";
import HotelSelectIllustration from "../../../assets/illustrations/HotelSelectIllustration.svg";
import PackageSelectIllustration from "../../../assets/illustrations/PackageSelectIllustration.svg";

import { useBookingFilters } from "../../stores/BookingFilters";
import BookingTypeCard from "../Card/BookingTypeCard";

const BookingTypeModal = ({ visible, onDismiss }) => {
  const setBookingType = useBookingFilters((state) => state.setBookingType);

  return (
    <BottomModal {...{ visible, onDismiss }}>
      <ModalTitle>What?</ModalTitle>
      <View style={screenStyles.Section}>
        <View style={styles.ButtonsContainer}>
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

const styles = {
  ButtonsContainer: {
    flexDirection: "row",
  },
};

export default BookingTypeModal;
