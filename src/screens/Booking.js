import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";

import {
  Appbar,
  SectionHeader,
  Scaffold,
  LocationBannerCard,
  LocationHalfCard,
  HotelDetailCard,
  Chip,
} from "../components";
import { CARD_SPACING, SCREEN_PADDING } from "../constants";
import {
  displayFilter,
  shouldDisplayFilter,
  useBookingFilters,
} from "../stores/BookingFilters";

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

const destinationsData = [
  {
    id: 1,
    coverUri:
      "https://static.toiimg.com/photo/msid-52005539,width-96,height-65.cms",
    name: "Shimla",
    rating: 4.5,
  },
  {
    id: 2,
    coverUri: "https://static.toiimg.com/photo/24476893.cms",
    name: "Jaipur",
    rating: 4.9,
  },
  {
    id: 3,
    coverUri:
      "https://static.toiimg.com/thumb/msid-51892205,width-748,height-499,resizemode=4,imgsize-266613/.jpg",
    name: "Goa",
    rating: 3.5,
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

const BookingScreen = () => {
  const city = useBookingFilters((state) => state.city);
  const bookingType = useBookingFilters((state) => state.bookingType);
  const filterValues = useBookingFilters((state) => state.filterValues);
  const searchQuery = useBookingFilters((state) => state.searchQuery);
  const initData = useBookingFilters((state) => state.initData);
  const clearFilter = useBookingFilters((state) => state.clearFilter);
  const clearSearch = useBookingFilters((state) => state.clearSearch);

  console.log(filterValues);

  useEffect(initData, [initData]);

  return (
    <Scaffold
      renderHeader={() => (
        <Appbar.Header>
          <Appbar.Content title="Booking" />
          <Appbar.Action icon="heart-outline" />
        </Appbar.Header>
      )}
    >
      <View style={styles.Section}>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CardsScrollerContainer}
        >
          {city && (
            <Chip icon="map-marker-outline" style={styles.CardsScrollerCard}>
              {city.name}
            </Chip>
          )}
          {bookingType && (
            <Chip icon="home-outline" style={styles.CardsScrollerCard}>
              {bookingType}
            </Chip>
          )}
          <Chip
            icon="magnify"
            style={styles.CardsScrollerCard}
            onClose={searchQuery && clearSearch}
          >
            {searchQuery ? `"${searchQuery}"` : "Search"}
          </Chip>
          <Chip icon="filter-outline" style={styles.CardsScrollerCard}>
            Filters
          </Chip>
          {Object.entries(filterValues).map(
            ([filterName, filterValue]) =>
              shouldDisplayFilter[filterName](filterValue) && (
                <Chip
                  key={filterName}
                  style={styles.CardsScrollerCard}
                  onClose={() => {
                    clearFilter(filterName);
                  }}
                >
                  {displayFilter[filterName](filterValue)}
                </Chip>
              )
          )}
        </ScrollView>
      </View>
      <View style={styles.Section}>
        <SectionHeader style={styles.SectionHeader}>Top Packages</SectionHeader>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CardsScrollerContainer}
        >
          {packagesData.map(({ id, coverUri, name, rating }) => (
            <LocationBannerCard
              key={id}
              {...{ id, coverUri, name, rating }}
              style={styles.CardsScrollerCard}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.Section}>
        <SectionHeader style={styles.SectionHeader}>
          Top Destinations
        </SectionHeader>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CardsScrollerContainer}
        >
          {destinationsData.map(({ id, coverUri, name, rating }) => (
            <LocationHalfCard
              key={id}
              {...{ id, coverUri, name, rating }}
              style={styles.CardsScrollerCard}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.Section}>
        <SectionHeader style={styles.SectionHeader}>
          Hotels Nearby
        </SectionHeader>
        <ScrollView
          horizontal
          style={{ overflow: "visible" }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CardsScrollerContainer}
        >
          {hoteldetailsData.map(
            ({ id, coverUri, name, rating, area, city, price }) => (
              <HotelDetailCard
                key={id}
                {...{ id, coverUri, name, rating, area, city, price }}
                style={styles.CardsScrollerCard}
              />
            )
          )}
        </ScrollView>
      </View>
    </Scaffold>
  );
};

const styles = {
  Header: {
    elevation: 0,
  },
  Section: {
    paddingVertical: SCREEN_PADDING / 2,
  },
  SectionHeader: {
    marginHorizontal: SCREEN_PADDING,
    marginBottom: CARD_SPACING / 2,
  },
  CardsScrollerContainer: {
    paddingHorizontal: (3 / 4) * SCREEN_PADDING,
    paddingVertical: 2,
  },
  CardsScrollerCard: {
    marginHorizontal: SCREEN_PADDING / 4,
  },
};

export default BookingScreen;
