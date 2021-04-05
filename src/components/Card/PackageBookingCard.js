import React from "react";
import { View, Image } from "react-native";
import { Card, Divider, useTheme, Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

import commonStyles from "./styles";
import RatingPill from "../RatingPill";
import CardTitle from "../Typography/CardTitle";
import BookingCardPriceSubtitle from "../Typography/BookingCardPriceSubtitle";
import PackagePriceSummary from "../Typography/PackagePriceSummary";
import CardSubtitle from "../Typography/CardSubtitle";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { CARD_SPACING, SCREEN_PADDING } from "../../constants";
import { displayPackageBooking } from "../../helpers/booking";
import PackageDurationSubtitle from "../Typography/PackageDurationSubtitle";

const MyBookingPackageCard = ({
  id: packageBookingId,
  details: { coverUri, name, rating, price, days } = {},
  booking: { people, date } = {},
  style,
  ...props
}) => {
  const { width } = useScreenDimensions();
  const theme = useTheme();
  const { navigate } = useNavigation();

  return (
    <Card
      style={[{ width: width - 2 * SCREEN_PADDING }, style]}
      onPress={() => navigate("PackageBookingScreen", { packageBookingId })}
      {...props}
    >
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
            <PackageDurationSubtitle nights={days - 1} days={days} />
          </View>
        </View>
      </View>
      <Divider />
      <View style={commonStyles.CardContainer}>
        <View style={styles.CardContent}>
          <View style={styles.Flex} />
          <View style={styles.TextContainer}>
            <MaterialCommunityIcons
              size={16}
              color={theme.colors.textSecondary}
              style={[commonStyles.CardActionsIcon, styles.TextIcon]}
              name="calendar-month-outline"
            />
            <Text
              style={[
                { color: theme.colors.textSecondary },
                commonStyles.CardActionsText,
              ]}
            >
              {displayPackageBooking.date(date)}
            </Text>
          </View>
        </View>
      </View>
      <Divider />
      <View style={commonStyles.CardContainer}>
        <View style={[commonStyles.CardContent, styles.CardContent]}>
          <View style={styles.BillContainer}>
            <PackagePriceSummary {...{ price }} />
            <CardSubtitle>{`× ${displayPackageBooking.booking({
              people,
            })}`}</CardSubtitle>
          </View>
          <View style={commonStyles.CardActionsSpacer} />
          <BookingCardPriceSubtitle
            {...{ price: price * people }}
            style={styles.CardPrice}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = {
  Flex: {
    flexGrow: 1,
  },
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

export default MyBookingPackageCard;
