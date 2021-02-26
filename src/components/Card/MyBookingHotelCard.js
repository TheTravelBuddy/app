import React from "react";
import { View, Image } from "react-native";
import { Card, Divider, useTheme, Text, IconButton } from "react-native-paper";

import commonStyles from "./styles";
import RatingPill from "../RatingPill";
import CardTitle from "../Typography/CardTitle";
import LocationSubtitle from "../Typography/LocationSubtitle";
import DistanceSubtitle from "../Typography/DistanceSubtitle ";
import SearchHotelPriceSummary from "../Typography/SearchHotelPriceSummary";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { CARD_SPACING, SCREEN_PADDING } from "../../constants";
import CardSubtitle from "../Typography/CardSubtitle";
import HotelPriceSummary from "../Typography/HotelPriceSummary";
import HotelGuestSubtitle from "../Typography/HotelGuestSubtitle";

const guestDetails = {
  id: 1,
  adults: "2 Adults",
  child: "2 Children",
};
const MyBookingHotelCard = ({
  coverUri,
  name,
  rating,
  locality,
  city,
  distance,
  price,
  style,
  adults,
  child,
  ...props
}) => {
  const { width } = useScreenDimensions();
  const theme = useTheme();

  return (
    <Card
      style={[
        { width: width - 2 * SCREEN_PADDING, padding: CARD_SPACING },
        style,
      ]}
      {...props}
    >
      <View style={styles.CardContent}>
        <Image
          style={{
            width: width / 6,
            // height: width / 7,
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
        </View>
      </View>
      <View style={{ marginTop: 12 }} />
      <Divider />
      <View style={commonStyles.CardActionsContainer}>
        <IconButton
          size={18}
          color={theme.colors.textSecondary}
          style={commonStyles.CardActionsIcon}
          icon="account-multiple-outline"
        />
        <HotelGuestSubtitle
          style={commonStyles.ScreenPadded}
          adults={guestDetails.adults}
          child={guestDetails.child}
        />
        <View style={commonStyles.CardActionsSpacer} />
        <IconButton
          size={18}
          color={theme.colors.textSecondary}
          style={commonStyles.CardActionsIcon}
          icon="calendar-month-outline"
          onPress={() => {
            // eslint-disable-next-line no-alert
            alert("WIP: Like Blog Endpoint");
          }}
        />
        <Text
          style={[
            { color: theme.colors.textSecondary },
            commonStyles.CardActionsText,
          ]}
        >
          25 February 2021
        </Text>
      </View>
      <View style={styles.CardBody}>
        <View style={styles.CardContent}>
          <HotelPriceSummary {...{ price }} />
        </View>
        <View style={commonStyles.CardActionsSpacer} />
        <SearchHotelPriceSummary {...{ price }} style={styles.CardPrice} />
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

export default MyBookingHotelCard;
