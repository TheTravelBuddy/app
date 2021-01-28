import React from "react";
import { ScrollView, View } from "react-native";

import {
  Appbar,
  SectionHeader,
  Scaffold,
  LocationBannerCard,
  LocationHalfCard,
  HotelDetailCard,
  BlogCard,
} from "../components";
import { CARD_SPACING, SCREEN_PADDING } from "../constants";

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

const blogsData = [
  {
    id: 1,
    profilePic: "https://picsum.photos/1001",
    title: "My Vacation to Goa",
    likes: 43,
    content:
      "This summer vacation we went to the one of the best tourist spots of India.",
  },
  {
    id: 2,
    profilePic: "https://picsum.photos/1000",
    title: "Food Experiences Every...",
    likes: 69,
    content:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
  {
    id: 3,
    profilePic: "https://picsum.photos/1000",
    title: "Magic of the North",
    likes: 15,
    content:
      "This summer vacation we went to the one of the best tourist spots of India.",
  },
];
const HomeScreen = () => {
  return (
    <Scaffold
      renderHeader={() => (
        <Appbar.Header>
          <Appbar.Content title="Travel Buddy" />
        </Appbar.Header>
      )}
    >
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
      <View style={styles.Section}>
        <SectionHeader style={styles.SectionHeader}>Top Blogs</SectionHeader>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CardsScrollerContainer}
        >
          {blogsData.map(({ id, profilePic, title, likes, content }) => (
            <BlogCard
              key={id}
              {...{ id, profilePic, title, likes, content }}
              style={styles.CardsScrollerCard}
            />
          ))}
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

export default HomeScreen;
