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
import { CARD_SPACING, SCREEN_PADDING } from "../constants";

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
      <FAB
        small
        style={styles.HeaderBackFAB}
        icon="arrow-left"
        theme={whiteButtonTheme}
        onPress={goBack}
        elevation={0}
      />
      <BookingCheckmarkCard />
      <View style={styles.ScreenSection}>
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
        <View style={[screenStyles.FormInputContainer, styles.ActionButtons]}>
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
            style={[styles.TextIcon]}
          />
          <CardSubtitle>
            {displayFilter.booking({
              adults: hotelData.adults,
              children: hotelData.children,
            })}
          </CardSubtitle>
        </View>
        <View style={styles.Flex} />
        <View style={styles.TextContainer}>
          <MaterialCommunityIcons
            size={18}
            color={theme.colors.textSecondary}
            style={[styles.TextIcon]}
            name="calendar-month-outline"
          />
          <CardSubtitle>{displayFilter.date(hotelData.date)}</CardSubtitle>
        </View>
      </View>

      <Divider />

      <View style={[screenStyles.Section, screenStyles.ScreenPadded]}>
        <View>
          <Text style={[styles.SectionHeader, theme.fonts.bold]}>
            Payment Breakdown
          </Text>
          <View style={[styles.TextContainer, styles.Content]}>
            <Text style={[styles.SectionSubtitle, styles.Flex]}>
              Room Base Price
            </Text>
            <HotelPriceSummary price={hotelData.price} />
          </View>

          <View style={[styles.TextContainer, styles.Content]}>
            <Text style={[styles.SectionSubtitle, styles.Flex]}>Rooms</Text>
            <CardSubtitle>{` × ${displayFilter.booking({
              rooms: hotelData.rooms,
            })}`}</CardSubtitle>
          </View>
          <View style={[styles.TextContainer, styles.Content]}>
            <Text style={[styles.SectionSubtitle, styles.Flex]}>Days</Text>
            <CardSubtitle>
              {`× ${displayFilter.numberOfDays(hotelData.numberOfDays)}`}
            </CardSubtitle>
          </View>
        </View>
      </View>

      <Divider />

      <View style={[screenStyles.Section, screenStyles.ScreenPadded]}>
        <View style={styles.Content}>
          <Text
            style={[styles.TitleBody, styles.SectionHeader, theme.fonts.bold]}
          >
            Total Amount
          </Text>
          <BookingCardPriceSubtitle
            style={styles.Price}
            price={hotelData.price * hotelData.numberOfDays * hotelData.rooms}
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
  ActionButtons: {
    marginTop: SCREEN_PADDING / 2,
  },
  ScreenSection: {
    margin: SCREEN_PADDING,
  },
  SectionRightButton: {
    alignSelf: "flex-end",
  },
  TextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  TextIcon: {
    marginRight: CARD_SPACING / 2,
    margin: 0,
    color: "#696969",
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
    fontSize: 14,
    letterSpacing: 0.15,
    color: "#9D9BA6",
  },
};

export default HotelBookingScreen;
