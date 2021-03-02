import React, { useMemo } from "react";
import { View } from "react-native";

import styles from "./styles";
import {
  HorizontalScroller,
  SectionHeader,
  Scaffold,
  BusinessCategoryCard,
  AttractionCard,
  ExploreServiceCard,
  BusinessBannerCard,
} from "../components";

const businessData = [
  { id: 1, name: "Cake Shops", coverUri: "https://picsum.photos/1003" },
  { id: 2, name: "Best Places To Eat", coverUri: "https://picsum.photos/1002" },
  { id: 3, name: "Parks", coverUri: "https://picsum.photos/1001" },
  { id: 4, name: "Shopping Malls", coverUri: "https://picsum.photos/1003" },
];
const placesData = [
  {
    id: 1,
    coverUri:
      "https://static.toiimg.com/photo/msid-52005539,width-96,height-65.cms",
    name: "Kanheri Caves",
    rating: undefined,
  },
  {
    id: 2,
    coverUri: "https://static.toiimg.com/photo/24476893.cms",
    name: "National Park",
    rating: undefined,
  },
  {
    id: 3,
    coverUri: "https://static.toiimg.com/photo/24476893.cms",
    name: "Juhu Beach",
    rating: 4.9,
  },
];
const topicData = [
  { id: 1, name: "Parking" },
  { id: 2, name: "Police" },
  { id: 3, name: "Petrol Pump" },
];

const topBusinessesData = [
  {
    id: 1,
    coverUri:
      "https://static.toiimg.com/photo/77652252/oie_2095710glh9nB1O.jpg?width=748&resize=4",
    name: "Bombay Gastro and Grill",
    rating: 4.5,
    businessType: "Restaurant",
  },
  {
    id: 2,
    coverUri:
      "https://images.news18.com/ibnlive/uploads/2016/07/Chitkul-Valley-Himachal-PradeshIndia-Edited-in-Lightroom-5-Imgur.jpg",
    name: "RCD Foodie",
    rating: 5,
    businessType: "Restaurant",
  },
  {
    id: 3,
    coverUri: "https://picsum.photos/1005",
    name: "Jugs Kitchen",
    rating: 4.2,
    businessType: "Restaurant",
  },
];

const ExploreScreen = ({ navigation: { navigate } }) => {
  return (
    <Scaffold
      header={useMemo(
        () => ({
          title: "Explore",
          actions: [
            {
              icon: "magnify",
              onPress: () => navigate("BookingSearchScreen"),
            },
          ],
        }),
        [navigate]
      )}
    >
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          See What&apos;s Nearby
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
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          Iconic Places
        </SectionHeader>
        <HorizontalScroller>
          {placesData.map((placesDataDetails) => (
            <AttractionCard key={placesDataDetails.id} {...placesDataDetails} />
          ))}
        </HorizontalScroller>
      </View>
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          Services Near You
        </SectionHeader>
        <HorizontalScroller>
          {topicData.map((topicDetails) => (
            <ExploreServiceCard key={topicDetails.id} {...topicDetails} />
          ))}
        </HorizontalScroller>
      </View>
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          Recommended For You
        </SectionHeader>
        <HorizontalScroller>
          {topBusinessesData.map((topBusinessesDetails) => (
            <BusinessBannerCard
              key={topBusinessesDetails.id}
              {...topBusinessesDetails}
            />
          ))}
        </HorizontalScroller>
      </View>
    </Scaffold>
  );
};

export default ExploreScreen;
