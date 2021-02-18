import React, { useMemo } from "react";
import { View, Image } from "react-native";
import { Card, FAB, useTheme } from "react-native-paper";

import styles from "./styles";

import {
  SectionHeader,
  Scaffold,
  HorizontalScroller,
  LocationSubtitle,
  Button,
  Chip,
  ScreenTitle,
  RatingPill,
  SearchPriceSummary,
  Paragraph,
  CardTitle,
  Appbar,
} from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";
import { CARD_SPACING, CHIP_SPACING, SCREEN_PADDING } from "../constants";

const hotelDetails = {
  id: 1,
  name: "Taj Mahal Palace",
  about:
    "The Taj Mahal Palace Hotel is a heritage, five-star, luxury hotel built in the Saracenic Revival style in the Colaba area of Mumbai, Maharashtra, India, situated next to the Gateway of India. Historically it was known as the 'Taj Mahal Hotel' or simply 'The Taj'.",
  rating: 4.5,
  area: "Colaba",
  city: "Mumbai",
  photos: [
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/a5/d8/c1/exterior.jpg",
    "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/27/36/2736904_v5.jpeg",
    "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/99/50/99501_v5.jpeg",
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/a5/d8/c1/exterior.jpg",
  ],
  amenities: [
    "wifi",
    "ac",
    "pool",
    "parking",
    "pool",
    "parking",
    "spa",
    "ac",
    "wifi",
  ],
  price: 3550,
};

const reviews = [
  {
    username: "Riddhi Dholakia",
    rating: 4.5,
    reviewText:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
  {
    username: "Riddhi Dholakia",
    rating: 3.6,
    reviewText:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
];

const HotelDetailsScreen = ({ navigation: { goBack } }) => {
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
    <Scaffold
      renderHeader={() => (
        <></>
        //   <FAB
        //     small
        //     style={{
        //       position: "absolute",
        //       margin: 8,
        //       top: 0,
        //       left: 0,
        //       zIndex: 4,
        //     }}
        //     mode="contained"
        //     icon="arrow-left"
        //     theme={whiteButtonTheme}
        //     onPress={goBack}
        //   />
        //   <FAB
        //     small
        //     style={{
        //       position: "absolute",
        //       margin: 8,
        //       top: 0,
        //       right: 0,
        //       zIndex: 4,
        //     }}
        //     mode="contained"
        //     icon="heart-outline"
        //     theme={whiteButtonTheme}
        //     onPress={() => {
        //       // eslint-disable-next-line no-alert
        //       alert("WIP: Like Hotel API");
        //     }}
        //   />
      )}
      renderFooter={() => (
        <View
          style={{
            backgroundColor: theme.colors.surface,
            elevation: 4,
            flexDirection: "row",
            alignItems: "center",
            padding: Math.round(CARD_SPACING / 2),
            paddingLeft: SCREEN_PADDING,
          }}
        >
          <SearchPriceSummary style={{ flex: 2 }} price={hotelDetails.price} />
          <Button
            mode="contained"
            style={{ flex: 1 }}
            onPress={() => {
              // eslint-disable-next-line no-alert
              alert("WIP: Booking Flow");
            }}
          >
            BOOK
          </Button>
        </View>
      )}
    >
      {/* <Appbar.Header
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          zIndex: 10,
          // backgroundColor: "transparent",
        }}
      > */}
      {/* <View style={{ flex: 1 }} /> */}
      {/* <FAB
        small
        style={{ position: "absolute", margin: 8, top: 0, left: 0 }}
        mode="contained"
        icon="arrow-left"
        theme={whiteButtonTheme}
        onPress={() => alert("Hi")}
      />
      <FAB
        small
        style={{ position: "absolute", margin: 8, top: 0, right: 0 }}
        mode="contained"
        icon="heart-outline"
        theme={whiteButtonTheme}
        onPress={() => {
          // eslint-disable-next-line no-alert
          alert("WIP: Like Hotel API");
        }}
      /> */}
      {/* </Appbar.Header> */}
      <View>
        <HorizontalScroller gap={0} verticalSpacing={0} horizontalSpacing={0}>
          {hotelDetails.photos.map((photoUri) => (
            <Image
              source={{
                uri: photoUri,
              }}
              style={{ height: width / 2, width }}
              height={width / 2}
            />
          ))}
        </HorizontalScroller>
        <>
          <FAB
            small
            style={{
              position: "absolute",
              margin: 8,
              top: 0,
              left: 0,
              zIndex: 4,
            }}
            mode="contained"
            icon="arrow-left"
            theme={whiteButtonTheme}
            onPress={goBack}
          />
          <FAB
            small
            style={{
              position: "absolute",
              margin: 8,
              top: 0,
              right: 0,
              zIndex: 4,
            }}
            mode="contained"
            icon="heart-outline"
            theme={whiteButtonTheme}
            onPress={() => {
              // eslint-disable-next-line no-alert
              alert("WIP: Like Hotel API");
            }}
          />
        </>
        <View style={[styles.Section]}>
          <View
            style={[
              { flex: 1, flexDirection: "row", marginTop: SCREEN_PADDING },
              styles.ScreenPadded,
            ]}
          >
            <ScreenTitle style={{ flex: 1 }}>{hotelDetails.name}</ScreenTitle>
            <RatingPill rating={hotelDetails.rating} />
          </View>
          <LocationSubtitle
            style={styles.ScreenPadded}
            area={hotelDetails.area}
            city={hotelDetails.city}
          />
        </View>
        <View style={styles.Section}>
          <View style={[styles.FormInputContainer, styles.ScreenPadded]}>
            <Button
              mode="contained"
              icon="map-marker-outline"
              style={styles.FormInputLeft}
              theme={whiteButtonTheme}
              onPress={() => {
                // eslint-disable-next-line no-alert
                alert("WIP: Open Hotel Location on Map");
              }}
            >
              View on map
            </Button>
            <Button
              mode="contained"
              icon="phone-outline"
              style={styles.FormInputRight}
              theme={whiteButtonTheme}
              onPress={() => {
                // eslint-disable-next-line no-alert
                alert("WIP: Open Contact Details");
              }}
            >
              Contact Us
            </Button>
          </View>
        </View>
        <View style={styles.Section}>
          <SectionHeader style={[styles.ScreenPadded, SectionHeader]}>
            About
          </SectionHeader>
          <Paragraph style={styles.ScreenPadded}>
            {hotelDetails.about}
          </Paragraph>
        </View>
        <View style={styles.Section}>
          <View style={styles.SectionHeader}>
            <SectionHeader style={[styles.ScreenPadded, SectionHeader]}>
              Amenities
            </SectionHeader>
          </View>
          <View
            style={[
              {
                flexDirection: "row",
                flexWrap: "wrap",
                marginHorizontal: SCREEN_PADDING - CHIP_SPACING,
              },
            ]}
          >
            {hotelDetails.amenities.map((amenitiesList) => (
              <Chip style={{ margin: CHIP_SPACING }}>{amenitiesList}</Chip>
            ))}
          </View>
        </View>
        <View style={styles.Section}>
          <View style={styles.SectionHeader}>
            <SectionHeader style={[styles.ScreenPadded, SectionHeader]}>
              Reviews
            </SectionHeader>
          </View>
          <View style={styles.ScreenPadded}>
            {/* <RatingPill rating={hotelDetails.rating} /> */}
            {reviews.map((review) => (
              <Card
                style={{
                  padding: CARD_SPACING,
                  marginVertical: Math.round(CARD_SPACING / 2),
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RatingPill rating={review.rating} />
                  <CardTitle style={{ flex: 1, marginLeft: CARD_SPACING }}>
                    {review.username}
                  </CardTitle>
                </View>
                <Paragraph>{review.reviewText}</Paragraph>
              </Card>
            ))}
            <Button
              compact
              style={{ alignSelf: "flex-end" }}
              onPress={() => {
                // eslint-disable-next-line no-alert
                alert("WIP: Reviews Screen Navigation");
              }}
            >
              Read More Reviews
            </Button>
          </View>
        </View>
      </View>
    </Scaffold>
  );
};

export default HotelDetailsScreen;
