import React from "react";
import { View, Image } from "react-native";
import { Card, useTheme } from "react-native-paper";

import styles from "./styles";
import RatingPill from "../RatingPill";
import CardTitle from "../Typography/CardTitle";
import LocationSubtitle from "../Typography/LocationSubtitle";
import DistanceSubtitle from "../Typography/DistanceSubtitle ";
import SearchPriceSummary from "../Typography/SearchPriceSummary";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { CARD_SPACING, SCREEN_PADDING } from "../../constants";

const BookingSearchCard = ({
  coverUri,
  style,
  name,
  rating,
  area,
  city,
  distance,

  price,
}) => {
  const { width } = useScreenDimensions();
  const theme = useTheme();

  return (
    <Card
      style={[
        { width: width - 2 * SCREEN_PADDING, padding: CARD_SPACING },
        style,
      ]}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Image
          style={{
            width: width / 4,
            height: width / 4,
            borderRadius: theme.roundness,
          }}
          source={{ uri: coverUri }}
        />
        <View style={[{ flex: 1, marginLeft: CARD_SPACING }]}>
          <View style={styles.CardTitleContainer}>
            <CardTitle style={styles.CardTitleText}>{name}</CardTitle>
            <RatingPill rating={rating} />
          </View>
          <LocationSubtitle {...{ area, city }} />
          <DistanceSubtitle {...{ distance }} />
          <View style={{ flexGrow: 1 }} />
          <SearchPriceSummary
            {...{ price }}
            style={{ alignSelf: "flex-end" }}
          />
        </View>
      </View>
    </Card>
  );
};

export default BookingSearchCard;
