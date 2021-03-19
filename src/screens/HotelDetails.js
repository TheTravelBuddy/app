import React, { useMemo, useCallback } from "react";
import { View, Image } from "react-native";
import { FAB, useTheme } from "react-native-paper";

import screenStyles from "./styles";

import {
  SectionHeader,
  Scaffold,
  HorizontalScroller,
  LocationSubtitle,
  Button,
  Chip,
  ScreenTitle,
  RatingPill,
  SearchHotelPriceSummary,
  Paragraph,
  ReviewCard,
  RenderOnLoad,
  WriteReviewModal,
} from "../components";
import useToggle from "../hooks/useToggle";
import useScreenDimensions from "../hooks/useScreenDimensions";
import { CARD_SPACING, CHIP_SPACING, SCREEN_PADDING } from "../constants";
import API, { useAPI } from "../helpers/API";

const HotelDetailsScreen = ({
  navigation: { goBack, navigate },
  route: { params },
}) => {
  const theme = useTheme();
  const { width } = useScreenDimensions();

  const [apiRequest, refetchData] = useAPI({
    url: "/traveller/hotel",
    params: { hotelId: params.hotelId },
  });

  const whiteButtonTheme = useMemo(
    () => ({
      colors: {
        primary: theme.colors.surface,
        accent: theme.colors.surface,
      },
    }),
    [theme.colors.surface]
  );

  const likeHotel = useCallback(async () => {
    await API({
      method: "post",
      url: "/traveller/hotel/like",
      params: { hotelId: params.hotelId },
    });
    await refetchData();
  }, [refetchData, params.hotelId]);

  const unlikeHotel = useCallback(async () => {
    await API({
      method: "delete",
      url: "/traveller/hotel/unlike",
      params: { hotelId: params.hotelId },
    });
    await refetchData();
  }, [refetchData, params.hotelId]);
  const writeReviewModal = useToggle(false);
  return (
    <Scaffold
      renderFooter={() =>
        apiRequest.data && (
          <View
            style={[
              styles.BottomBar,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <SearchHotelPriceSummary
              style={screenStyles.FlexMore}
              price={apiRequest.data.price}
            />
            <Button
              mode="contained"
              style={screenStyles.Flex}
              onPress={() => {
                navigate("HotelBookingScreen");
              }}
            >
              BOOK
            </Button>
          </View>
        )
      }
    >
      <RenderOnLoad loading={!apiRequest.data}>
        {() => (
          <View>
            <HorizontalScroller
              gap={0}
              verticalSpacing={0}
              horizontalSpacing={0}
            >
              {apiRequest.data.photos.map((photoUri) => (
                <Image
                  key={photoUri}
                  source={{
                    uri: photoUri,
                  }}
                  style={{ height: width / 2, width }}
                  height={width / 2}
                />
              ))}
            </HorizontalScroller>
            <>
              <FAB
                small
                style={styles.HeaderBackFAB}
                mode="contained"
                icon="arrow-left"
                theme={whiteButtonTheme}
                onPress={goBack}
              />
              <FAB
                small
                style={styles.HeaderFavoriteFAB}
                mode="contained"
                color={apiRequest.data.liked ? "#EB453D" : undefined}
                icon={apiRequest.data.liked ? "heart" : "heart-outline"}
                theme={whiteButtonTheme}
                onPress={apiRequest.data.liked ? unlikeHotel : likeHotel}
              />
            </>
            <View style={[screenStyles.Section]}>
              <View style={[screenStyles.ScreenPadded, styles.TitleContainer]}>
                <ScreenTitle style={screenStyles.Flex}>
                  {apiRequest.data.name}
                </ScreenTitle>
                <RatingPill rating={apiRequest.data.rating} />
              </View>
              <LocationSubtitle
                style={screenStyles.ScreenPadded}
                locality={apiRequest.data.locality}
                city={apiRequest.data.city}
              />
            </View>
            <View style={screenStyles.Section}>
              <View
                style={[
                  screenStyles.FormInputContainer,
                  screenStyles.ScreenPadded,
                ]}
              >
                <Button
                  mode="contained"
                  icon="map-marker-outline"
                  style={screenStyles.FormInputLeft}
                  theme={whiteButtonTheme}
                  onPress={() => {
                    // eslint-disable-next-line no-alert
                    alert("WIP: Open Hotel Location on Map");
                  }}
                >
                  View on map
                </Button>
                <Button
                  mode="contained"
                  icon="phone-outline"
                  style={screenStyles.FormInputRight}
                  theme={whiteButtonTheme}
                  onPress={() => {
                    // eslint-disable-next-line no-alert
                    alert("WIP: Open Contact Details");
                  }}
                >
                  Contact Us
                </Button>
              </View>
            </View>
            <View style={screenStyles.Section}>
              <SectionHeader
                style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
              >
                About
              </SectionHeader>
              <Paragraph style={screenStyles.ScreenPadded}>
                {apiRequest.data.about}
              </Paragraph>
            </View>
            <View style={screenStyles.Section}>
              <SectionHeader
                style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
              >
                Amenities
              </SectionHeader>
              <View style={styles.AmenitiesContainer}>
                {apiRequest.data.amenities.map((amenity) => (
                  <Chip key={amenity} style={{ margin: CHIP_SPACING }}>
                    {amenity.toUpperCase()}
                  </Chip>
                ))}
              </View>
            </View>
            <View style={screenStyles.Section}>
              <SectionHeader
                style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
              >
                Reviews
              </SectionHeader>
              <View
                style={[
                  screenStyles.FormInputContainer,
                  screenStyles.ScreenPadded,
                ]}
              >
                <Button
                  mode="contained"
                  icon="pencil-outline"
                  style={screenStyles.FormInputLeft}
                  theme={whiteButtonTheme}
                  onPress={writeReviewModal.show}
                >
                  Write Review
                </Button>
              </View>
              <View style={screenStyles.ScreenPadded}>
                {apiRequest.data.reviews.map((review) => (
                  <ReviewCard key={review.id} {...review} />
                ))}
                <Button
                  compact
                  style={styles.SectionRightButton}
                  onPress={() => {
                    navigate("ReviewsScreen");
                  }}
                >
                  Read More Reviews
                </Button>
              </View>
            </View>
          </View>
        )}
      </RenderOnLoad>
      <WriteReviewModal
        visible={writeReviewModal.visible}
        onDismiss={writeReviewModal.hide}
      />
    </Scaffold>
  );
};

const styles = {
  BottomBar: {
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
    padding: Math.round(CARD_SPACING / 2),
    paddingLeft: SCREEN_PADDING,
  },
  HeaderBackFAB: {
    position: "absolute",
    margin: 8,
    top: 0,
    left: 0,
    zIndex: 4,
  },
  HeaderFavoriteFAB: {
    position: "absolute",
    margin: 8,
    top: 0,
    right: 0,
    zIndex: 4,
  },
  TitleContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: SCREEN_PADDING,
  },
  AmenitiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: SCREEN_PADDING - CHIP_SPACING,
  },
  SectionRightButton: {
    alignSelf: "flex-end",
  },
};

export default HotelDetailsScreen;
