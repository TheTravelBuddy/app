import React, { useMemo } from "react";
import { View } from "react-native";
import { Divider } from "react-native-paper";

import screenStyles from "./styles";

import {
  SectionHeader,
  Scaffold,
  HorizontalScroller,
  Button,
  AttractionCard,
  HotelDetailCard,
  PackageDetailCard,
  BlogCard,
  CityHalfCard,
  BusinessCategoryCard,
} from "../components";

import { SCREEN_PADDING } from "../constants";

const placesData = [
  {
    id: 1,
    coverUri:
      "https://static.toiimg.com/photo/msid-52005539,width-96,height-65.cms",
    name: "Kanheri Caves",
    rating: 4.5,
  },
  {
    id: 2,
    coverUri: "https://static.toiimg.com/photo/24476893.cms",
    name: "National Park",
    rating: 4.9,
  },
  {
    id: 3,
    coverUri: "https://static.toiimg.com/photo/24476893.cms",
    name: "Juhu Beach",
    rating: 4.9,
  },
];

const cityDetailsData = [
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
const hotelDetailsData = [
  {
    id: 1,
    coverUri:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/a5/d8/c1/exterior.jpg",
    name: "Taj Mahal Palace",
    rating: 4.5,
    locality: "Colaba",
    city: "Mumbai",
    price: 3550,
  },
  {
    id: 2,
    coverUri:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/27/36/2736904_v5.jpeg",
    name: "JW Marriott",
    rating: 5,
    locality: "Colaba",
    city: "Mumbai",
    price: 4000,
  },
  {
    id: 3,
    coverUri:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/99/50/99501_v5.jpeg",
    name: "Adarsh Baug Hotel",
    rating: 3.5,
    locality: "Kalbadevi",
    city: "Mumbai",
    price: 1050,
  },
];
const packageDetailsData = [
  {
    id: 1,
    coverUri: "https://static.toiimg.com/photo/24476893.cms",
    name: "Majistic Mumbai",
    rating: 4.5,
    duration: "5N/6D",
    price: 3550,
  },
  {
    id: 2,
    coverUri:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/27/36/2736904_v5.jpeg",
    name: "Have Pleasure in Mumbai",
    rating: 5,
    duration: "5N/6D",
    price: 4000,
  },
  {
    id: 3,
    coverUri:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/99/50/99501_v5.jpeg",
    name: "Adarsh Baug Hotel",
    rating: 3.5,
    duration: "5N/6D",
    price: 1050,
  },
];
const businessData = [
  { id: 1, name: "Cake Shops", coverUri: "https://picsum.photos/1003" },
  { id: 2, name: "Parks", coverUri: "https://picsum.photos/1002" },
  {
    id: 3,
    name: "Best Places To Eats",
    coverUri: "https://picsum.photos/1001",
  },
  { id: 4, name: "Shopping Malls", coverUri: "https://picsum.photos/1003" },
];
const blogData = [
  {
    id: 1,
    authorProfile: "https://picsum.photos/1000",
    title: "Magic of the North",
    likes: 5,
    content:
      "This summer vacation we went to the one of the best tourist spots of India.",
  },
  {
    id: 2,
    authorProfile: "https://picsum.photos/1000",
    title: "Magic of the North",
    likes: 5,
    content:
      "This summer vacation we went to the one of the best tourist spots of India.",
  },
  {
    id: 3,
    authorProfile: "https://picsum.photos/1000",
    title: "Magic of the North",
    likes: 45,
    content:
      "This summer vacation we went to the one of the best tourist spots of India.",
  },
];
const MyFavouritesScreen = ({ navigation: { goBack, navigate } }) => {
  return (
    <Scaffold
      header={useMemo(() => ({ title: "My Favourites", backAction: goBack }), [
        goBack,
      ])}
    >
      <View>
        <View style={screenStyles.Section}>
          <SectionHeader
            style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
          >
            Favourite Destinations
          </SectionHeader>
          <HorizontalScroller>
            {cityDetailsData.map((cityDetails) => (
              <CityHalfCard key={cityDetails.id} {...cityDetails} />
            ))}
          </HorizontalScroller>
        </View>
        <View style={[screenStyles.ScreenPadded, styles.Section]}>
          <Button
            compact
            style={styles.SectionRightButton}
            onPress={() => {
              navigate("FavouriteDestinationsScreen");
            }}
          >
            View all
          </Button>
        </View>
        <Divider />
        <View style={screenStyles.Section}>
          <SectionHeader
            style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
          >
            Favourite Iconic Places
          </SectionHeader>
          <HorizontalScroller>
            {placesData.map((placesDataDetails) => (
              <AttractionCard
                key={placesDataDetails.id}
                {...placesDataDetails}
              />
            ))}
          </HorizontalScroller>
        </View>
        <View style={[screenStyles.ScreenPadded, styles.Section]}>
          <Button
            compact
            style={styles.SectionRightButton}
            onPress={() => {
              navigate("FavouriteAttractionsScreen");
            }}
          >
            View all
          </Button>
        </View>
        <Divider />
        <View style={screenStyles.Section}>
          <SectionHeader
            style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
          >
            Favourite Packages
          </SectionHeader>
          <HorizontalScroller>
            {packageDetailsData.map((packageDetails) => (
              <PackageDetailCard key={packageDetails.id} {...packageDetails} />
            ))}
          </HorizontalScroller>
        </View>
        <View style={[screenStyles.ScreenPadded, styles.Section]}>
          <Button
            compact
            style={styles.SectionRightButton}
            onPress={() => {
              navigate("FavouritePackagesScreen");
            }}
          >
            View all
          </Button>
        </View>
        <Divider />
        <View style={screenStyles.Section}>
          <SectionHeader
            style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
          >
            Favourite Hotels
          </SectionHeader>
          <HorizontalScroller>
            {hotelDetailsData.map((hotelDetails) => (
              <HotelDetailCard key={hotelDetails.id} {...hotelDetails} />
            ))}
          </HorizontalScroller>
        </View>
        <View style={[screenStyles.ScreenPadded, styles.Section]}>
          <Button
            compact
            style={styles.SectionRightButton}
            onPress={() => {
              navigate("FavouriteHotelsScreen");
            }}
          >
            View all
          </Button>
        </View>
        <Divider />
        <View style={screenStyles.Section}>
          <SectionHeader
            style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
          >
            Favourite Nearby Places
          </SectionHeader>
          <HorizontalScroller>
            {businessData.map((businessDataDetails) => (
              <BusinessCategoryCard
                key={businessDataDetails.id}
                {...businessDataDetails}
              />
            ))}
          </HorizontalScroller>
        </View>
        <View style={[screenStyles.ScreenPadded, styles.Section]}>
          <Button
            compact
            style={styles.SectionRightButton}
            onPress={() => {
              navigate("FavouriteNearbyLocationScreen");
            }}
          >
            View all
          </Button>
        </View>
        <Divider />
        <View style={screenStyles.Section}>
          <SectionHeader
            style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
          >
            Favourite Blogs
          </SectionHeader>
          <HorizontalScroller>
            {blogData.map((blogDetails) => (
              <BlogCard key={blogDetails.id} {...blogDetails} />
            ))}
          </HorizontalScroller>
        </View>

        <View style={[screenStyles.ScreenPadded, styles.Section]}>
          <Button
            compact
            style={styles.SectionRightButton}
            onPress={() => {
              navigate("FavouriteBlogsScreen");
            }}
          >
            View all
          </Button>
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

  SectionRightButton: {
    alignSelf: "flex-end",
  },
  Section: {
    paddingBottom: SCREEN_PADDING / 2,
  },
};

export default MyFavouritesScreen;
