import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";

import commonStyles from "./styles";
import CardTitle from "../Typography/CardTitle";
import CardSubtitle from "../Typography/CardSubtitle";
import Chip from "../Chip";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { CARD_SPACING, CHIP_SPACING, SCREEN_PADDING } from "../../constants";
import { openLink, openDirections, openPhone } from "../../helpers/links";
import DistanceSubtitle from "../Typography/DistanceSubtitle";

const ServiceSearchCard = ({
  id,
  name,
  distance,
  address,
  timings,
  phone,
  website,
  latitude,
  longitude,
  style,
  ...props
}) => {
  const { width } = useScreenDimensions();

  return (
    <Card style={[{ width: width - 2 * SCREEN_PADDING }, style]} {...props}>
      <View style={commonStyles.CardContainer}>
        <View style={commonStyles.CardTitleContainer}>
          <CardTitle style={commonStyles.CardTitleText}>{name}</CardTitle>
        </View>

        <DistanceSubtitle fromCurrentLocation {...{ distance }} />
        <CardSubtitle>{address}</CardSubtitle>
        {timings && <CardSubtitle bold>{timings}</CardSubtitle>}

        <View style={styles.ActionsContainer}>
          {phone && (
            <Chip
              icon="phone-outline"
              mode="flat"
              style={styles.ActionChip}
              onPress={() => {
                openPhone(phone);
              }}
            >
              Call
            </Chip>
          )}
          {website && (
            <Chip
              icon="web"
              mode="flat"
              style={styles.ActionChip}
              onPress={() => {
                openLink({ link: website });
              }}
            >
              Website
            </Chip>
          )}
          {latitude && longitude && (
            <Chip
              icon="map-marker-outline"
              mode="flat"
              style={styles.ActionChip}
              onPress={() => {
                openDirections({ latitude, longitude });
              }}
            >
              Directions
            </Chip>
          )}
        </View>
      </View>
    </Card>
  );
};

const styles = {
  ActionsContainer: {
    marginTop: CARD_SPACING / 2,
    flexDirection: "row",
    alignSelf: "flex-end",
    flexWrap: "wrap",
  },
  ActionChip: {
    margin: CHIP_SPACING / 2,
  },
};

export default ServiceSearchCard;
