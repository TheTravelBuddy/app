import React, { useEffect } from "react";
import { View } from "react-native";

import styles from "./styles";

import {
  Appbar,
  SectionHeader,
  Scaffold,
  LocationBannerCard,
  LocationHalfCard,
  HotelDetailCard,
  HorizontalScroller,
} from "../components";
import { useBookingFilters } from "../stores/BookingFilters";

const packagesData = [
  {
    id: 1,
    coverUri:
      "https://static.toiimg.com/photo/77652252/oie_2095710glh9nB1O.jpg?width=748&resize=4",
    name: "Beauty of South",
    rating: 3.5,
  },
  {
    id: 2,
    coverUri:
      "https://images.news18.com/ibnlive/uploads/2016/07/Chitkul-Valley-Himachal-PradeshIndia-Edited-in-Lightroom-5-Imgur.jpg",
    name: "Magic of the North",
    rating: 3.5,
  },
  {
    id: 3,
    coverUri: "https://picsum.photos/1005",
    name: "Magic of the North",
    rating: 3.5,
  },
];

const topRatedPackagesData = [
  {
    id: 1,
    coverUri:
      "https://static.toiimg.com/photo/msid-52005539,width-96,height-65.cms",
    name: "Beauty of South",
    rating: 4.5,
  },
  {
    id: 2,
    coverUri: "https://static.toiimg.com/photo/24476893.cms",
    name: "Magic of North",
    rating: 4.9,
  },
];

const hoteldetailsData = [
  {
    id: 1,
    coverUri:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/a5/d8/c1/exterior.jpg",
    name: "Taj Mahal Palace",
    rating: 4.5,
    area: "Colaba",
    city: "Mumbai",
    price: 3550,
  },
  {
    id: 2,
    coverUri:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/27/36/2736904_v5.jpeg",
    name: "JW Marriott",
    rating: 5,
    area: "Colaba",
    city: "Mumbai",
    price: 4000,
  },
  {
    id: 3,
    coverUri:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/99/50/99501_v5.jpeg",
    name: "Adarsh Baug Hotel",
    rating: 3.5,
    area: "Kalbadevi",
    city: "Mumbai",
    price: 1050,
  },
];

const BookingScreen = ({ navigation }) => {
  const initData = useBookingFilters((state) => state.initData);

  useEffect(initData, [initData]);

  return (
    <Scaffold
      renderHeader={() => (
        <Appbar.Header>
          <Appbar.Content title="Booking" />
          <Appbar.Action
            icon="magnify"
            onPress={() => navigation.navigate("BookingSearchScreen")}
          />
          <Appbar.Action
            icon="heart-outline"
            onPress={() => navigation.navigate("BookingFavoritesScreen")}
          />
        </Appbar.Header>
      )}
    >
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          Recommended Packages
        </SectionHeader>
        <HorizontalScroller>
          {packagesData.map(({ id, coverUri, name, rating }) => (
            <LocationBannerCard key={id} {...{ id, coverUri, name, rating }} />
          ))}
        </HorizontalScroller>
      </View>
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          Hotels Nearby
        </SectionHeader>
        <HorizontalScroller>
          {hoteldetailsData.map(
            ({ id, coverUri, name, rating, area, city, price }) => (
              <HotelDetailCard
                key={id}
                {...{ id, coverUri, name, rating, area, city, price }}
              />
            )
          )}
        </HorizontalScroller>
      </View>
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          Highest Rated Packages
        </SectionHeader>
        <HorizontalScroller>
          {topRatedPackagesData.map(({ id, coverUri, name, rating }) => (
            <LocationHalfCard key={id} {...{ id, coverUri, name, rating }} />
          ))}
        </HorizontalScroller>
      </View>
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          Hotels on a Budget
        </SectionHeader>
        <HorizontalScroller>
          {hoteldetailsData.map(
            ({ id, coverUri, name, rating, area, city, price }) => (
              <HotelDetailCard
                key={id}
                {...{ id, coverUri, name, rating, area, city, price }}
              />
            )
          )}
        </HorizontalScroller>
      </View>
    </Scaffold>
  );
};

export default BookingScreen;
