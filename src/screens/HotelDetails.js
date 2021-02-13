import React from "react";
import { View, Image } from "react-native";

import styles from "./styles";

import {
  SectionHeader,
  Scaffold,
  HorizontalScroller,
  Appbar,
  LocationSubtitle,
  Button,
  ModalTitle,
  Chip,
} from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";

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
    "spa",
    "wifi",
    "ac",
    "pool",
    "parking",
    "spa",
  ],
  price: 3550,
};

const HotelDetailsScreen = () => {
  const { width } = useScreenDimensions();
  return (
    <Scaffold>
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
          <Appbar.Header>
            <Appbar.Content title={hotelDetails.name} />
          </Appbar.Header>
          <LocationSubtitle
            style={styles.ScreenPadded}
            area={hotelDetails.area}
            city={hotelDetails.city}
          />
        </View>
        <View style={styles.Section}>
          <View style={[styles.FormInputContainer, styles.ScreenPadded]}>
            <Button compact mode="outlined" style={styles.FormInputLeft}>
              View on map
            </Button>
            <Button compact mode="contained" style={styles.FormInputRight}>
              Contact Us
            </Button>
          </View>
        </View>
        <View style={styles.SectionHeader}>
          <ModalTitle style={[styles.ScreenPadded, SectionHeader]}>
            Amenities
          </ModalTitle>
          <View
            style={[
              { flexDirection: "row", flexWrap: "wrap" },
              styles.ScreenPadded,
            ]}
          >
            {hotelDetails.amenities.map((amenitieslist) => (
              <Chip>{amenitieslist}</Chip>
            ))}
          </View>
        </View>
        <View style={styles.SectionHeader}>
          <ModalTitle style={[styles.ScreenPadded, styles, SectionHeader]}>
            Guests Feedback
          </ModalTitle>
        </View>
      </View>
    </Scaffold>
  );
};

export default HotelDetailsScreen;
