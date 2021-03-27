import React from "react";
import { View } from "react-native";

import BottomModal from "../BottomModal";
import ModalTitle from "../Typography/ModalTitle";
import screenStyles from "../../screens/styles";
import HotelSelectIllustration from "../../../assets/illustrations/HotelSelectIllustration.svg";
import PackageSelectIllustration from "../../../assets/illustrations/PackageSelectIllustration.svg";

import BookingTypeCard from "../Card/BookingTypeCard";

const BookingTypeModal = ({ visible, onDismiss, bookingType }) => {
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
              bookingType.setValue("HOTEL");
              onDismiss();
            }}
          />
          <BookingTypeCard
            title="Package"
            renderIllustration={(props) => (
              <PackageSelectIllustration {...props} />
            )}
            onPress={() => {
              bookingType.setValue("PACKAGE");
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
