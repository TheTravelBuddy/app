import React, { useMemo } from "react";
import { View } from "react-native";

import styles from "./styles";

import {
  SectionHeader,
  Scaffold,
  PackageBannerCard,
  PackageHalfCard,
  HotelDetailCard,
  HorizontalScroller,
  RenderOnLoad,
} from "../components";
import { useAPI } from "../helpers/API";

const BookingScreen = ({ navigation: { navigate } }) => {
  const [apiRequest] = useAPI("/traveller/booking");

  return (
    <Scaffold
      header={useMemo(
        () => ({
          title: "Booking",
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
      <RenderOnLoad loading={!apiRequest.data}>
        {() => (
          <>
            <View style={styles.Section}>
              <SectionHeader
                style={[styles.ScreenPadded, styles.SectionHeader]}
              >
                Recommended Packages
              </SectionHeader>
              <HorizontalScroller>
                {apiRequest.data?.recommendedPackages.map((packageData) => (
                  <PackageBannerCard key={packageData.id} {...packageData} />
                ))}
              </HorizontalScroller>
            </View>
            <View style={styles.Section}>
              <SectionHeader
                style={[styles.ScreenPadded, styles.SectionHeader]}
              >
                Hotels Nearby
              </SectionHeader>
              <HorizontalScroller>
                {apiRequest.data?.nearbyHotels.map((hotelData) => (
                  <HotelDetailCard key={hotelData.id} {...hotelData} />
                ))}
              </HorizontalScroller>
            </View>
            <View style={styles.Section}>
              <SectionHeader
                style={[styles.ScreenPadded, styles.SectionHeader]}
              >
                Highest Rated Packages
              </SectionHeader>
              <HorizontalScroller>
                {apiRequest.data?.topPackages.map((packageData) => (
                  <PackageHalfCard key={packageData.id} {...packageData} />
                ))}
              </HorizontalScroller>
            </View>
            <View style={styles.Section}>
              <SectionHeader
                style={[styles.ScreenPadded, styles.SectionHeader]}
              >
                Hotels on a Budget
              </SectionHeader>
              <HorizontalScroller>
                {apiRequest.data?.budgetHotels.map((hotelData) => (
                  <HotelDetailCard key={hotelData.id} {...hotelData} />
                ))}
              </HorizontalScroller>
            </View>
          </>
        )}
      </RenderOnLoad>
    </Scaffold>
  );
};

export default BookingScreen;
