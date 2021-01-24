import React from "react";
import { View } from "react-native";
import { Appbar, useTheme } from "react-native-paper";

import {
  Scaffold,
  LocationBannerCard,
  LocationHalfCard,
  HotelDetailCard,
} from "../components";

const HomeScreen = () => {
  const theme = useTheme();
  return (
    <Scaffold
      renderHeader={() => (
        <Appbar.Header
          style={[styles.Header, { backgroundColor: theme.colors.background }]}
        >
          <Appbar.Content title="Travel Buddy" />
        </Appbar.Header>
      )}
    >
      <View style={styles.Container}>
        <View>
          <LocationBannerCard
            coverUri="https://picsum.photos/1000"
            name="Magic of the North"
            rating={3.5}
          />
          <LocationHalfCard
            coverUri="https://picsum.photos/1000"
            name="Magic of the North"
            rating={4.9}
          />
          <HotelDetailCard
            coverUri="https://picsum.photos/1000"
            name="Magic of the North"
            rating={4.9}
            location="Colaba, Mumbai"
            price={1000}
          />
        </View>
      </View>
    </Scaffold>
  );
};

const styles = {
  Header: {
    elevation: 0,
  },
};

export default HomeScreen;
