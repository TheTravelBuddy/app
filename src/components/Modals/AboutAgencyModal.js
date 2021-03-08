import React from "react";
import { View } from "react-native";

import BottomModal from "../BottomModal";
import Button from "../Button";
import screenStyles from "../../screens/styles";
import RatingPill from "../RatingPill";
import SectionHeader from "../Typography/SectionHeader";
import CardTitle from "../Typography/CardTitle";
import Paragraph from "../Typography/Paragraph";

const AboutAgencyModal = ({ visible, onDismiss, name, rating, about }) => {
  return (
    <BottomModal {...{ visible, onDismiss }}>
      <View>
        <View style={styles.Container}>
          <CardTitle style={styles.AgencyNameText}>{name}</CardTitle>
          <RatingPill rating={rating} />
        </View>
        <View style={screenStyles.Section}>
          <SectionHeader>About</SectionHeader>
          <Paragraph>{about}</Paragraph>
        </View>
        <View style={[screenStyles.FormInputContainer]}>
          <Button
            mode="outlined"
            icon="map-marker-outline"
            style={screenStyles.FormInputLeft}
            onPress={() => {
              // eslint-disable-next-line no-alert
              alert("WIP: Open Contact Details");
            }}
          >
            View on Map
          </Button>
          <Button
            mode="outlined"
            icon="phone-outline"
            style={screenStyles.FormInputRight}
            onPress={() => {
              // eslint-disable-next-line no-alert
              alert("WIP: Open Contact Details");
            }}
          >
            Contact Us
          </Button>
        </View>
      </View>
    </BottomModal>
  );
};
const styles = {
  Container: {
    alignItems: "center",
    flexDirection: "row",
  },
  AgencyNameText: {
    flex: 1,
    fontSize: 20,
  },
};
export default AboutAgencyModal;
