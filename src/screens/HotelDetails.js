import React from "react";
import { View, Image } from "react-native";
import { Card, useTheme } from "react-native-paper";

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
} from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";
import { CARD_SPACING, CHIP_SPACING, SCREEN_PADDING } from "../constants";

const hotelDetails = {
  id: 1,
  name: "Taj Mahal Palace",
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

const HotelDetailsScreen = () => {
  const theme = useTheme();
  const { width } = useScreenDimensions();

  return (
    <Scaffold
      renderFooter={() => (
        <View
          style={{
            backgroundColor: theme.colors.surface,
            elevation: 4,
            flexDirection: "row",
            alignItems: "center",
            padding: Math.round(CARD_SPACING / 2),
          }}
        >
          <SearchPriceSummary style={{ flex: 1 }} price={hotelDetails.price} />
          <Button mode="contained" style={{ flex: 1 }}>
            BOOK
          </Button>
        </View>
      )}
    >
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
        <View style={[styles.Section]}>
          <View
            style={[
              { flex: 1, flexDirection: "row", marginTop: SCREEN_PADDING },
              styles.ScreenPadded,
            ]}
          >
            <ScreenTitle>{hotelDetails.name}</ScreenTitle>
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
              icon="map-marker-outline"
              compact
              mode="outlined"
              style={styles.FormInputLeft}
            >
              View on map
            </Button>
            <Button
              icon="phone-outline"
              compact
              mode="outlined"
              style={styles.FormInputRight}
            >
              Contact Us
            </Button>
          </View>
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
            {hotelDetails.amenities.map((amenitieslist) => (
              <Chip style={{ margin: CHIP_SPACING }}>{amenitieslist}</Chip>
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
              onPress={() => {}}
            >
              READ MORE
            </Button>
          </View>
        </View>
      </View>
    </Scaffold>
  );
};

export default HotelDetailsScreen;
