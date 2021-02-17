import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import styles from "./styles";
import {
  Appbar,
  HorizontalScroller,
  SectionHeader,
  Scaffold,
  LocationBannerCard,
  LocationHalfCard,
  HotelDetailCard,
  BlogCard,
} from "../components";
import { useAPI } from "../helpers/API";

const HomeScreen = () => {
  const [apiRequest] = useAPI("/traveller/home");

  return (
    <Scaffold
      renderHeader={() => (
        <Appbar.Header>
          <Appbar.Content title="Travel Buddy" />
        </Appbar.Header>
      )}
    >
      {apiRequest.loading ? (
        <View style={styles.ActivityContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>
          <View style={styles.Section}>
            <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
              Top Packages
            </SectionHeader>
            <HorizontalScroller>
              {apiRequest.data?.topPackages.map((packageDetails) => (
                <LocationBannerCard
                  key={packageDetails.id}
                  {...packageDetails}
                />
              ))}
            </HorizontalScroller>
          </View>
          <View style={styles.Section}>
            <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
              Top Destinations
            </SectionHeader>
            <HorizontalScroller>
              {apiRequest.data?.topDestinations.map((cityDetails) => (
                <LocationHalfCard key={cityDetails.id} {...cityDetails} />
              ))}
            </HorizontalScroller>
          </View>
          <View style={styles.Section}>
            <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
              Hotels Nearby
            </SectionHeader>
            <HorizontalScroller>
              {apiRequest.data?.topHotels.map((hotelDetails) => (
                <HotelDetailCard key={hotelDetails.id} {...hotelDetails} />
              ))}
            </HorizontalScroller>
          </View>
          <View style={styles.Section}>
            <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
              Top Blogs
            </SectionHeader>
            <HorizontalScroller>
              {apiRequest.data?.topBlogs.map((blogDetails) => (
                <BlogCard key={blogDetails.id} {...blogDetails} />
              ))}
            </HorizontalScroller>
          </View>
        </>
      )}
    </Scaffold>
  );
};

export default HomeScreen;
