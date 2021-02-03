import React, { useEffect } from "react";
import { View } from "react-native";
import { ActivityIndicator, TextInput, Card } from "react-native-paper";

import styles from "./styles";

import {
  Appbar,
  Button,
  SectionHeader,
  Scaffold,
  LocationBannerCard,
  LocationHalfCard,
  HotelDetailCard,
  Chip,
  HorizontalScroller,
  BottomModal,
  CardTitle,
  Picker,
  DateTimePicker,
} from "../components";
import BookingLocationModal from "../components/Modals/BookingLocationModal";
import {
  displayFilter,
  shouldDisplayFilter,
  useBookingFilters,
} from "../stores/BookingFilters";
import useToggle from "../hooks/useToggle";
import usePicker from "../hooks/usePicker";
import useDateTimePicker from "../hooks/useDateTimePicker";

const today = new Date();
const initialDate = new Date(1900, 0, 2);

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
  const selectedCity = useBookingFilters((state) => state.city);
  const selectedBookingType = useBookingFilters((state) => state.bookingType);
  const filterValues = useBookingFilters((state) => state.filterValues);
  const searchQuery = useBookingFilters((state) => state.searchQuery);
  const initData = useBookingFilters((state) => state.initData);
  const clearFilter = useBookingFilters((state) => state.clearFilter);
  const setBookingType = useBookingFilters((state) => state.setBookingType);
  const clearSearch = useBookingFilters((state) => state.clearSearch);

  const locationModal = useToggle(false);
  const bookingTypeModal = useToggle(false);
  const searchModal = useToggle(false);
  const filtersModal = useToggle(false);
  const mood = usePicker("MIXED");
  const checkindate = useDateTimePicker(today);

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
        <BookingLocationModal
          visible={locationModal.visible}
          onDismiss={locationModal.hide}
        />
        <BottomModal
          visible={bookingTypeModal.visible}
          onDismiss={bookingTypeModal.hide}
        >
          <CardTitle>Select Booking Type</CardTitle>
          <View style={styles.Section}>
            <View style={styles.FormInputContainer}>
              <Card style={styles.FormInputLeft}>
                <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
                <Card.Title title="Hotel" />
              </Card>
              <Card style={styles.FormInputLeft}>
                <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
                <Card.Title title="Package" />
              </Card>
            </View>
          </View>
        </BottomModal>
        <BottomModal visible={searchModal.visible} onDismiss={searchModal.hide}>
          <CardTitle>(Search)</CardTitle>
          <TextInput label="Search" />
          <View style={styles.Section}>
            <View style={styles.FormInputContainer}>
              <Button mode="outlined" style={styles.FormInputLeft}>
                Clear
              </Button>
              <Button mode="contained" style={styles.FormInputRight}>
                Search
              </Button>
            </View>
          </View>
        </BottomModal>
        <BottomModal
          visible={filtersModal.visible}
          onDismiss={filtersModal.hide}
        >
          <View style={styles.Section}>
            <CardTitle>(Mood Header)</CardTitle>
            <Picker
              label="Travel Mood"
              {...mood.props}
              items={[
                { value: "RELAX", label: "Relax" },
                { value: "ADVENTURE", label: "Adventure" },
                { value: "MIXED", label: "Mixed" },
              ]}
            />
          </View>
          <View style={styles.Section}>
            <CardTitle>(Timing Header)</CardTitle>
            <View style={styles.FormInputContainer}>
              <DateTimePicker
                {...checkindate.props}
                style={styles.FormInputLeft}
                label="Check In "
                maximumDate={today}
                minimumDate={initialDate}
              />
              <TextInput label="No of days" style={styles.FormInputRight} />
            </View>
          </View>
          <View style={styles.Section}>
            <CardTitle>(Stay)</CardTitle>
            <TextInput
              label="Rooms"
              keyboardType="number-pad"
              style={styles.FormInput}
            />
            <View style={styles.FormInputContainer}>
              <TextInput
                label="Adults"
                keyboardType="number-pad"
                style={styles.FormInputLeft}
              />
              <TextInput
                label="Children"
                keyboardType="number-pad"
                style={styles.FormInputRight}
              />
            </View>
          </View>
          <View style={styles.Section}>
            <CardTitle>Budget</CardTitle>
            <View style={styles.FormInputContainer}>
              <TextInput
                left={<TextInput.Affix text="₹ " />}
                label="Min"
                keyboardType="number-pad"
                style={styles.FormInputLeft}
              />
              <TextInput
                left={<TextInput.Affix text="₹ " />}
                label="Max"
                keyboardType="number-pad"
                style={styles.FormInputRight}
              />
            </View>
          </View>
          <View style={styles.Section}>
            <View style={styles.FormInputContainer}>
              <Button mode="outlined" style={styles.FormInputLeft}>
                Clear
              </Button>
              <Button mode="contained" style={styles.FormInputRight}>
                Save
              </Button>
            </View>
          </View>
        </BottomModal>
        <HorizontalScroller>
          <Chip
            icon="map-marker-outline"
            style={styles.CardsScrollerCard}
            onPress={locationModal.show}
          >
            {selectedCity ? selectedCity.name : <ActivityIndicator size={12} />}
          </Chip>
          {selectedBookingType && (
            <Chip
              icon="home-outline"
              style={styles.CardsScrollerCard}
              onPress={bookingTypeModal.show}
            >
              {selectedBookingType}
            </Chip>
          )}
          <Chip
            icon="magnify"
            style={styles.CardsScrollerCard}
            onPress={searchModal.show}
            onClose={searchQuery && clearSearch}
          >
            {searchQuery ? `"${searchQuery}"` : "Search"}
          </Chip>
          <Chip
            icon="filter-outline"
            style={styles.CardsScrollerCard}
            onPress={filtersModal.show}
          >
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
        </HorizontalScroller>
      </View>
      <View style={styles.Section}>
        <SectionHeader style={styles.SectionHeader}>Top Packages</SectionHeader>
        <HorizontalScroller>
          {packagesData.map(({ id, coverUri, name, rating }) => (
            <LocationBannerCard
              key={id}
              {...{ id, coverUri, name, rating }}
              style={styles.CardsScrollerCard}
            />
          ))}
        </HorizontalScroller>
      </View>
      <View style={styles.Section}>
        <SectionHeader style={styles.SectionHeader}>
          Top Destinations
        </SectionHeader>
        <HorizontalScroller>
          {destinationsData.map(({ id, coverUri, name, rating }) => (
            <LocationHalfCard
              key={id}
              {...{ id, coverUri, name, rating }}
              style={styles.CardsScrollerCard}
            />
          ))}
        </HorizontalScroller>
      </View>
      <View style={styles.Section}>
        <SectionHeader style={styles.SectionHeader}>
          Hotels Nearby
        </SectionHeader>
        <HorizontalScroller>
          {hoteldetailsData.map(
            ({ id, coverUri, name, rating, area, city, price }) => (
              <HotelDetailCard
                key={id}
                {...{ id, coverUri, name, rating, area, city, price }}
                style={styles.CardsScrollerCard}
              />
            )
          )}
        </HorizontalScroller>
      </View>
    </Scaffold>
  );
};

export default BookingScreen;
