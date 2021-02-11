import React from "react";
import { View, Image } from "react-native";
import { Text } from "react-native-paper";

import styles from "./styles";
import { Appbar, SectionHeader, Scaffold } from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";

const hotelDetails = {
  id: 1,
  coverUri:
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/a5/d8/c1/exterior.jpg",
  name: "Taj Mahal Palace",
  rating: 4.5,
  area: "Colaba",
  city: "Mumbai",
  price: 3550,
  overview:
    "The Taj Mahal Palace Hotel is a heritage, five-star, luxury hotel built in the Saracenic Revival style in the city of Mumbai, India, situated next to the Gateway of India.",
};

const HotelDetailsScreen = () => {
  const { width } = useScreenDimensions();
  return (
    <Scaffold
      renderHeader={() => (
        <Appbar.Header>
          <Appbar.Content title={hotelDetails.name} />
        </Appbar.Header>
      )}
    >
      <Image
        source={{ uri: hotelDetails.coverUri }}
        style={{
          height: width / 2,
        }}
        height={width / 2}
      />
      <View style={[styles.Section]}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          Overview
        </SectionHeader>
        <Text style={styles.ScreenPadded}>{hotelDetails.overview}</Text>
      </View>
    </Scaffold>
  );
};

export default HotelDetailsScreen;
