import React, { useMemo } from "react";
import { View, Image } from "react-native";
import { FAB, useTheme, Divider, Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { displayFilter } from "../stores/BookingFilters";

import screenStyles from "./styles";

import {
  Scaffold,
  BookingCheckmarkCard,
  LocationSubtitle,
  RatingPill,
  ScreenTitle,
  Button,
  CardSubtitle,
  BookingCardPriceSubtitle,
  HotelPriceSummary,
} from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";

import { CARD_SPACING } from "../constants";

const hotelData = {
  id: 1,
  coverUri: "https://static.toiimg.com/photo/24476893.cms",
  name: "Taj Hotel",
  rating: 4.9,
  locality: "Colaba",
  city: "Mumbai",
  price: 5000,
  distance: 5,
  adults: 3,
  children: 2,
  rooms: 2,
  date: new Date(),
  numberOfDays: 4,
};

const HotelBookingScreen = ({ navigation: { goBack } }) => {
  const theme = useTheme();
  const { width } = useScreenDimensions();

  const whiteButtonTheme = useMemo(
    () => ({
      colors: {
        primary: theme.colors.surface,
        accent: theme.colors.surface,
      },
    }),
    [theme.colors.surface]
  );

  return (
    <Scaffold>
      <BookingCheckmarkCard />
      <>
        <FAB
          small
          style={styles.HeaderBackFAB}
          mode="contained"
          icon="arrow-left"
          theme={whiteButtonTheme}
          onPress={goBack}
        />
      </>
      <View style={[screenStyles.Section]}>
        <View style={screenStyles.ScreenPadded}>
          <View style={[styles.Content]}>
            <Image
              style={{
                width: width / 6,
                height: width / 6,
                borderRadius: theme.roundness,
              }}
              source={{ uri: hotelData.coverUri }}
            />

            <View style={styles.TextBody}>
              <View style={styles.Content}>
                <ScreenTitle style={styles.TitleBody}>
                  {hotelData.name}
                </ScreenTitle>
                <RatingPill rating={hotelData.rating} />
              </View>
              <LocationSubtitle
                locality={hotelData.locality}
                city={hotelData.city}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[screenStyles.Section, screenStyles.ScreenPadded]}>
        <View style={screenStyles.FormInputContainer}>
          <Button
            mode="contained"
            icon="map-marker-outline"
            style={screenStyles.FormInputLeft}
            theme={whiteButtonTheme}
            onPress={() => {
              // eslint-disable-next-line no-alert
              alert("WIP: Open Contact Details");
            }}
          >
            View on Map
          </Button>
          <Button
            mode="contained"
            icon="phone-outline"
            style={screenStyles.FormInputRight}
            theme={whiteButtonTheme}
            onPress={() => {
              // eslint-disable-next-line no-alert
              alert("WIP: Open Contact Details");
            }}
          >
            Call Hotel
          </Button>
        </View>
      </View>

      <Divider />

      <View
        style={[
          screenStyles.Section,
          screenStyles.ScreenPadded,
          styles.Content,
        ]}
      >
        <View style={styles.TextContainer}>
          <MaterialCommunityIcons
            name="account-multiple-outline"
            size={18}
            color={theme.colors.textSecondary}
            style={[styles.TextIcon]}
          />
          <Text style={[{ color: theme.colors.textSecondary }]}>
            {displayFilter.booking({
              adults: hotelData.adults,
              children: hotelData.children,
            })}
          </Text>
        </View>
        <View style={styles.Flex} />
        <View style={styles.TextContainer}>
          <MaterialCommunityIcons
            size={18}
            color={theme.colors.textSecondary}
            style={[styles.TextIcon]}
            name="calendar-month-outline"
          />
          <Text style={[{ color: theme.colors.textSecondary }]}>
            {displayFilter.date(hotelData.date)}
          </Text>
        </View>
      </View>
      <Divider />
      <View style={[screenStyles.Section, screenStyles.ScreenPadded]}>
        <View>
          <Text style={[styles.SectionHeader, theme.fonts.bold]}>
            Payment Breakdown
          </Text>

          <View style={[screenStyles.Section]}>
            <Text style={styles.SectionSubtitle}>Room Base Price</Text>

            <View style={[screenStyles.Section]}>
              <View style={[styles.TextContainer, styles.Content]}>
                <HotelPriceSummary price={hotelData.price} />
                <CardSubtitle>{` × ${displayFilter.booking({
                  rooms: hotelData.rooms,
                })}`}</CardSubtitle>

                <View style={styles.TitleBody} />
                <HotelPriceSummary price={hotelData.price} />
              </View>
            </View>
          </View>

          <View style={styles.Content}>
            <Text style={styles.SectionSubtitle}>Number of days</Text>
            <View style={styles.Flex} />
            <CardSubtitle>
              {`× ${displayFilter.numberOfDays(hotelData.numberOfDays)}`}
            </CardSubtitle>
          </View>
        </View>
      </View>

      <Divider />

      <View style={[screenStyles.Section, screenStyles.ScreenPadded]}>
        <View style={styles.Content}>
          <ScreenTitle style={styles.TitleBody}>Total Amount </ScreenTitle>
          <BookingCardPriceSubtitle
            style={styles.Price}
            price={hotelData.price}
          />
        </View>
      </View>
      <Divider />
      <View style={[screenStyles.Section, screenStyles.ScreenPadded]}>
        <View style={styles.TextContainer}>
          <MaterialCommunityIcons
            name="alert-box-outline"
            size={18}
            color={theme.colors.textSecondary}
            style={[styles.TextIcon]}
          />
          <Text style={[{ color: theme.colors.textSecondary }]}>
            This booking is non-cancellable
          </Text>
        </View>
      </View>
    </Scaffold>
  );
};

const styles = {
  HeaderBackFAB: {
    position: "absolute",
    margin: 8,
    top: 0,
    left: 0,
    zIndex: 4,
  },
  SectionRightButton: {
    alignSelf: "flex-end",
  },
  TextContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginRight: CARD_SPACING / 2,
  },
  TextIcon: {
    marginRight: CARD_SPACING / 2,
    margin: 0,
  },
  Content: {
    flexDirection: "row",
  },
  TextBody: {
    flex: 1,
    marginLeft: CARD_SPACING,
  },
  Price: {
    alignSelf: "flex-end",
  },
  TitleBody: {
    flex: 1,
    marginRight: CARD_SPACING / 2,
  },
  TitleContainer: {
    flex: 1,
    flexDirection: "row",
    // marginTop: SCREEN_PADDING,
  },
  Flex: { flexGrow: 1 },
  SectionHeader: {
    fontSize: 20,
    // lineHeight: 20,
    letterSpacing: 0.15,
    color: "#4A4A4A",
  },
  SectionSubtitle: {
    fontSize: 18,
    letterSpacing: 0.15,
    color: "#9D9BA6",
  },
};

export default HotelBookingScreen;
