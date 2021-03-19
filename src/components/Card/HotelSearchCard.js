import React from "react";
import { View, Image } from "react-native";
import { Card, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import commonStyles from "./styles";
import RatingPill from "../RatingPill";
import CardTitle from "../Typography/CardTitle";
import LocationSubtitle from "../Typography/LocationSubtitle";
import DistanceSubtitle from "../Typography/DistanceSubtitle";
import SearchHotelPriceSummary from "../Typography/SearchHotelPriceSummary";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { CARD_SPACING, SCREEN_PADDING } from "../../constants";

const HotelSearchCard = ({
  coverUri,
  name,
  rating,
  locality,
  city,
  distance,
  price,
  style,
  ...props
}) => {
  const { width } = useScreenDimensions();
  const theme = useTheme();
  const { navigate } = useNavigation();

  return (
    <Card
      style={[
        { width: width - 2 * SCREEN_PADDING, padding: CARD_SPACING },
        style,
      ]}
      onPress={() => navigate("HotelDetailsScreen")}
      {...props}
    >
      <View style={styles.CardContent}>
        <Image
          style={{
            width: width / 4,
            height: width / 4,
            borderRadius: theme.roundness,
          }}
          source={{ uri: coverUri }}
        />
        <View style={styles.CardBody}>
          <View style={commonStyles.CardTitleContainer}>
            <CardTitle style={commonStyles.CardTitleText}>{name}</CardTitle>
            <RatingPill rating={rating} />
          </View>
          <LocationSubtitle {...{ locality, city }} />
          <DistanceSubtitle {...{ distance }} />
          <View style={commonStyles.CardActionsSpacer} />
          <SearchHotelPriceSummary {...{ price }} style={styles.CardPrice} />
        </View>
      </View>
    </Card>
  );
};

const styles = {
  CardContent: {
    flex: 1,
    flexDirection: "row",
  },
  CardBody: {
    flex: 1,
    marginLeft: CARD_SPACING,
  },
  CardPrice: {
    alignSelf: "flex-end",
  },
};

export default HotelSearchCard;
