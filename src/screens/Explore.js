import React, { useMemo, useState, useEffect } from "react";
import { View } from "react-native";
import Geolocation from "react-native-geolocation-service";

import styles from "./styles";
import {
  HorizontalScroller,
  SectionHeader,
  Scaffold,
  BusinessCategoryCard,
  AttractionCard,
  ExploreServiceCard,
  BusinessBannerCard,
  RenderOnLoad,
  ExploreLocationModal,
} from "../components";
import { useAPI } from "../helpers/API";
import usePicker from "../hooks/usePicker";
import useToggle from "../hooks/useToggle";
import { haversineDistance } from "../helpers/distance";
import { askLocationPermission } from "../helpers/permission";

const businessData = [
  { id: 1, name: "Cake Shops", coverUri: "https://picsum.photos/1003" },
  { id: 2, name: "Best Places To Eat", coverUri: "https://picsum.photos/1002" },
  { id: 3, name: "Parks", coverUri: "https://picsum.photos/1001" },
  { id: 4, name: "Shopping Malls", coverUri: "https://picsum.photos/1003" },
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
  const [coordinates, setCoordinates] = useState();
  const [citiesRequest] = useAPI("/traveller/city/all");
  const cities = citiesRequest.data;
  const locationModal = useToggle(false);
  const selectedLocation = usePicker();
  const setSelectedLocation = selectedLocation.setValue;

  useEffect(() => {
    if (!coordinates?.latitude) {
      const city = cities?.length > 0 && cities[0];
      setSelectedLocation({
        latitude: city.latitude,
        longitude: city.longitude,
        city,
      });
    } else
      setSelectedLocation({
        ...coordinates,
        city: cities
          ?.map((city) => ({
            ...city,
            distance: haversineDistance(city, coordinates),
          }))
          .sort(({ distance: a }, { distance: b }) => a - b)[0],
      });
  }, [coordinates, cities, setSelectedLocation]);

  const [apiRequest] = useAPI(
    useMemo(
      () =>
        !selectedLocation.value
          ? ""
          : {
              url: "/traveller/explore",
              params: {
                latitude: selectedLocation.value.latitude,
                longitude: selectedLocation.value.longitude,
                cityId: selectedLocation.value.city.id,
              },
            },
      [selectedLocation]
    )
  );

  useEffect(() => {
    if (!askLocationPermission()) return;

    Geolocation.getCurrentPosition(
      ({ coords }) => setCoordinates(coords),
      console.warn
    );
  }, []);

  return (
    <Scaffold
      header={useMemo(
        () => ({
          title: !selectedLocation.value?.city?.name
            ? "Explore"
            : `Explore ${selectedLocation.value.city.name}`,
          actions: [
            {
              icon: "map-marker-outline",
              onPress: locationModal.show,
            },
            {
              icon: "magnify",
              onPress: () => navigate("BookingSearchScreen"),
            },
          ],
        }),
        [navigate, selectedLocation, locationModal.show]
      )}
    >
      <RenderOnLoad loading={citiesRequest.loading && !apiRequest.data}>
        {() => (
          <>
            <View style={styles.Section}>
              <SectionHeader
                style={[styles.ScreenPadded, styles.SectionHeader]}
              >
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
            {!!apiRequest.data?.nearbyAttractions?.length && (
              <View style={styles.Section}>
                <SectionHeader
                  style={[styles.ScreenPadded, styles.SectionHeader]}
                >
                  Iconic Places Nearby
                </SectionHeader>
                <HorizontalScroller>
                  {apiRequest.data?.nearbyAttractions.map(
                    (placesDataDetails) => (
                      <AttractionCard
                        key={placesDataDetails.id}
                        {...placesDataDetails}
                      />
                    )
                  )}
                </HorizontalScroller>
              </View>
            )}
            <View style={styles.Section}>
              <SectionHeader
                style={[styles.ScreenPadded, styles.SectionHeader]}
              >
                Services Near You
              </SectionHeader>
              <HorizontalScroller>
                {apiRequest.data?.services.map((topicDetails) => (
                  <ExploreServiceCard
                    key={topicDetails.id}
                    {...topicDetails}
                    coordinates={{
                      latitude: selectedLocation.value?.latitude,
                      longitude: selectedLocation.value?.longitude,
                    }}
                  />
                ))}
              </HorizontalScroller>
            </View>
            <View style={styles.Section}>
              <SectionHeader
                style={[styles.ScreenPadded, styles.SectionHeader]}
              >
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
            <ExploreLocationModal
              visible={locationModal.visible}
              onDismiss={locationModal.hide}
              cities={citiesRequest.data}
              selectedLocation={selectedLocation}
            />
          </>
        )}
      </RenderOnLoad>
    </Scaffold>
  );
};

export default ExploreScreen;
