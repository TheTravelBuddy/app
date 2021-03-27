import React from "react";
import { View } from "react-native";

import BottomModal from "../BottomModal";
import Button from "../Button";
import screenStyles from "../../screens/styles";
import RatingPill from "../RatingPill";
import SectionHeader from "../Typography/SectionHeader";
import CardTitle from "../Typography/CardTitle";
import Paragraph from "../Typography/Paragraph";
import { openMap, openPhone } from "../../helpers/links";

const AboutAgencyModal = ({
  visible,
  onDismiss,
  name,
  rating,
  description,
  latitude,
  longitude,
  phone,
}) => {
  return (
    <BottomModal {...{ visible, onDismiss }}>
      <View>
        <View style={styles.Container}>
          <CardTitle style={styles.AgencyNameText}>{name}</CardTitle>
          <RatingPill rating={rating} />
        </View>
        <View style={screenStyles.Section}>
          {description && (
            <>
              <SectionHeader>About</SectionHeader>
              <Paragraph>{description}</Paragraph>
            </>
          )}
        </View>
        <View style={[screenStyles.FormInputContainer]}>
          <Button
            mode="outlined"
            icon="map-marker-outline"
            style={screenStyles.FormInputLeft}
            onPress={() => {
              openMap({ latitude, longitude });
            }}
          >
            View on Map
          </Button>
          <Button
            mode="outlined"
            icon="phone-outline"
            style={screenStyles.FormInputRight}
            onPress={() => {
              openPhone({ phoneNumber: phone });
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
