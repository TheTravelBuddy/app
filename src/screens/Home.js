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
  const [topPackagesRequest] = useAPI("/traveller/home/topPackages");
  const [topDestinationsRequest] = useAPI("/traveller/home/topDestinations");
  const [topHotelsRequest] = useAPI("/traveller/home/topHotels");
  const [topBlogsRequest] = useAPI("/traveller/home/topBlogs");

  console.log(topBlogsRequest.data);

  return (
    <Scaffold
      renderHeader={() => (
        <Appbar.Header>
          <Appbar.Content title="Travel Buddy" />
        </Appbar.Header>
      )}
    >
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          Top Packages
        </SectionHeader>
        {topPackagesRequest.loading ? (
          <ActivityIndicator />
        ) : (
          <HorizontalScroller>
            {topPackagesRequest.data?.map((packageDetails) => (
              <LocationBannerCard key={packageDetails.id} {...packageDetails} />
            ))}
          </HorizontalScroller>
        )}
      </View>
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          Top Destinations
        </SectionHeader>
        {topDestinationsRequest.loading ? (
          <ActivityIndicator />
        ) : (
          <HorizontalScroller>
            {topDestinationsRequest.data?.map((cityDetails) => (
              <LocationHalfCard key={cityDetails.id} {...cityDetails} />
            ))}
          </HorizontalScroller>
        )}
      </View>
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          Hotels Nearby
        </SectionHeader>
        {topHotelsRequest.loading ? (
          <ActivityIndicator />
        ) : (
          <HorizontalScroller>
            {topHotelsRequest.data?.map((hotelDetails) => (
              <HotelDetailCard key={hotelDetails.id} {...hotelDetails} />
            ))}
          </HorizontalScroller>
        )}
      </View>
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          Top Blogs
        </SectionHeader>
        {topBlogsRequest.loading ? (
          <ActivityIndicator />
        ) : (
          <HorizontalScroller>
            {topBlogsRequest.data?.map((blogDetails) => (
              <BlogCard key={blogDetails.id} {...blogDetails} />
            ))}
          </HorizontalScroller>
        )}
      </View>
    </Scaffold>
  );
};

export default HomeScreen;
