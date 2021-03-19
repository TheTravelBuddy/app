import React from "react";
import { View, Image } from "react-native";
import { Card, Divider, useTheme, Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import commonStyles from "./styles";
import RatingPill from "../RatingPill";
import CardTitle from "../Typography/CardTitle";
import LocationSubtitle from "../Typography/LocationSubtitle";
import DistanceSubtitle from "../Typography/DistanceSubtitle";
import SearchHotelPriceSummary from "../Typography/SearchHotelPriceSummary";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { CARD_SPACING, SCREEN_PADDING } from "../../constants";
import HotelPriceSummary from "../Typography/HotelPriceSummary";
import CardSubtitle from "../Typography/CardSubtitle";
import { displayFilter } from "../../stores/BookingFilters";

const HotelBookingCard = ({
  coverUri,
  name,
  rating,
  locality,
  city,
  distance,
  price,
  booking: { adults, children, rooms, numberOfDays, date } = {},
  style,
  ...props
}) => {
  const { width } = useScreenDimensions();
  const theme = useTheme();

  return (
    <Card style={[{ width: width - 2 * SCREEN_PADDING }, style]} {...props}>
      <View style={commonStyles.CardContainer}>
        <View style={styles.CardContent}>
          <Image
            style={{
              width: width / 6,
              height: width / 6,
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
      </View>
      <Divider />
      <View style={commonStyles.CardContainer}>
        <View style={styles.CardContent}>
          <View style={styles.TextContainer}>
            <MaterialCommunityIcons
              name="account-multiple-outline"
              size={16}
              color={theme.colors.textSecondary}
              style={[commonStyles.CardActionsIcon, styles.TextIcon]}
            />
            <Text
              style={[
                { color: theme.colors.textSecondary },
                commonStyles.CardActionsText,
              ]}
            >
              {displayFilter.booking({ adults, children })}
            </Text>
          </View>
          <View style={commonStyles.CardActionsSpacer} />
          <View style={styles.TextContainer}>
            <MaterialCommunityIcons
              size={16}
              color={theme.colors.textSecondary}
              style={[commonStyles.CardActionsIcon, styles.TextIcon]}
              name="calendar-month-outline"
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
              {displayFilter.date(date)}
            </Text>
          </View>
        </View>
        <View style={[commonStyles.CardContent, styles.CardContent]}>
          <View style={styles.BillContainer}>
            <HotelPriceSummary {...{ price }} />
            <CardSubtitle>{`× ${displayFilter.booking({
              rooms,
            })}`}</CardSubtitle>
            <CardSubtitle>{`× ${displayFilter.numberOfDays(
              numberOfDays
            )}`}</CardSubtitle>
          </View>
          <View style={commonStyles.CardActionsSpacer} />
          <SearchHotelPriceSummary {...{ price }} style={styles.CardPrice} />
        </View>
      </View>
    </Card>
  );
};

const styles = {
  TextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  TextIcon: {
    marginRight: CARD_SPACING / 2,
  },
  CardContent: {
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

export default HotelBookingCard;
