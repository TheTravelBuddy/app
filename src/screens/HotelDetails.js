import React from "react";
import { View, Image, Text } from "react-native";
import { useTheme } from "react-native-paper";

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
} from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";
import { CHIP_SPACING, SCREEN_PADDING } from "../constants";

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
    username: "Riddhi",
    rating: 4.5,
    reviewtext:
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
            flexDirection: "row",
            height: 56,
            alignItems: "center",
            backgroundColor: theme.colors.surface,
            paddingHorizontal: SCREEN_PADDING,
            elevation: 4,
          }}
        >
          <View style={{ flexGrow: 1 }}>
            <SearchPriceSummary price={hotelDetails.price} />
          </View>
          <Button compact mode="contained" style={{ flexGrow: 1 }}>
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
              Guests Feedback
            </SectionHeader>
          </View>
          <View style={{ marginHorizontal: SCREEN_PADDING }}>
            <RatingPill rating={hotelDetails.rating} />
            <SectionHeader>Review</SectionHeader>
            <View></View>
          </View>
        </View>
      </View>
    </Scaffold>
  );
};

export default HotelDetailsScreen;
