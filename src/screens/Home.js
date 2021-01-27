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
    coverUri: "https://picsum.photos/1000",
    name: "Magic of the North",
    rating: 3.5,
  },
  {
    id: 2,
    coverUri: "https://picsum.photos/1001",
    name: "Magic of the North",
    rating: 3.5,
  },
  {
    id: 3,
    coverUri: "https://picsum.photos/1002",
    name: "Magic of the North",
    rating: 3.5,
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
          <LocationHalfCard
            coverUri="https://picsum.photos/1000"
            name="Magic of the North India"
            rating={4.9}
            style={styles.CardsScrollerCard}
          />
          <LocationHalfCard
            coverUri="https://picsum.photos/1000"
            name="Magic of the North India"
            rating={4.9}
            style={styles.CardsScrollerCard}
          />
          <LocationHalfCard
            coverUri="https://picsum.photos/1000"
            name="Magic of the North India"
            rating={4.9}
            style={styles.CardsScrollerCard}
          />
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
          <HotelDetailCard
            coverUri="https://picsum.photos/1000"
            name="Magic of the North"
            rating={4.9}
            area="Colaba"
            city="Mumbai"
            price={1000}
            style={styles.CardsScrollerCard}
          />
          <HotelDetailCard
            coverUri="https://picsum.photos/1000"
            name="Magic of the North"
            rating={4.9}
            area="Colaba"
            city="Mumbai"
            price={1000}
            style={styles.CardsScrollerCard}
          />
          <HotelDetailCard
            coverUri="https://picsum.photos/1000"
            name="Magic of the North"
            rating={4.9}
            area="Colaba"
            city="Mumbai"
            price={1000}
            style={styles.CardsScrollerCard}
          />
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
          <BlogCard
            profilePic="https://picsum.photos/1000"
            title="Magic of the North"
            likes={43}
            content="This summer vacation we went to the one of the best tourist spots of India."
            style={styles.CardsScrollerCard}
          />
          <BlogCard
            profilePic="https://picsum.photos/1000"
            title="Magic of the North"
            likes={43}
            content="This summer vacation we went to the one of the best tourist spots of India."
            style={styles.CardsScrollerCard}
          />
          <BlogCard
            profilePic="https://picsum.photos/1000"
            title="Magic of the North"
            likes={43}
            content="This summer vacation we went to the one of the best tourist spots of India."
            style={styles.CardsScrollerCard}
          />
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
  },
  CardsScrollerCard: {
    marginHorizontal: SCREEN_PADDING / 4,
  },
};

export default HomeScreen;
