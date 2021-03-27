import React, { useMemo, useCallback } from "react";
import { View, Image } from "react-native";
import { FAB, useTheme, IconButton } from "react-native-paper";

import screenStyles from "./styles";
import { openMap, openPhone } from "../helpers/links";
import {
  SectionHeader,
  Scaffold,
  HorizontalScroller,
  LocationSubtitle,
  SectionSubtitle,
  Button,
  Chip,
  ScreenTitle,
  RatingPill,
  SearchHotelPriceSummary,
  Paragraph,
  ReviewCard,
  RenderOnLoad,
  WriteReviewModal,
  HotelBookingModal,
} from "../components";
import useToggle from "../hooks/useToggle";
import useScreenDimensions from "../hooks/useScreenDimensions";
import {
  CARD_SPACING,
  CHIP_SPACING,
  SCREEN_PADDING,
  hotelAmenities,
} from "../constants";
import API, { useAPI } from "../helpers/API";

const HotelDetailsScreen = ({
  navigation: { goBack, navigate },
  route: { params },
}) => {
  const theme = useTheme();
  const { width } = useScreenDimensions();
  const writeReviewModal = useToggle(false);
  const hotelBookingModal = useToggle(false);

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
      url: "/traveller/hotel/like",
      params: { hotelId: params.hotelId },
    });
    await refetchData();
  }, [refetchData, params.hotelId]);
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
              onPress={hotelBookingModal.show}
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
                  compact
                  mode="contained"
                  icon="map-marker-outline"
                  style={screenStyles.FormInputLeft}
                  theme={whiteButtonTheme}
                  onPress={() => {
                    openMap({
                      latitude: apiRequest.data?.latitude,
                      longitude: apiRequest.data?.longitude,
                    });
                  }}
                >
                  View on map
                </Button>
                <Button
                  compact
                  mode="contained"
                  icon="phone-outline"
                  style={screenStyles.FormInputRight}
                  theme={whiteButtonTheme}
                  onPress={() => {
                    openPhone({ phoneNumber: apiRequest.data?.phoneNumber });
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
            <View style={[screenStyles.ScreenPadded, styles.TextContainer]}>
              <SectionSubtitle
                style={[screenStyles.SectionHeader, screenStyles.Flex]}
              >
                Have you stayed in this hotel before?
              </SectionSubtitle>
              <IconButton
                size={22}
                style={styles.ActionsIcon}
                icon="check"
                color={
                  apiRequest.data?.visited
                    ? theme.colors.primary
                    : theme.colors.textSecondary
                }
                onPress={async () => {
                  await API({
                    method: "post",
                    url: "/traveller/hotel/visited",
                    params: { hotelId: params.hotelId },
                  });
                  await refetchData();
                }}
              />
              <IconButton
                size={22}
                style={styles.ActionsIcon}
                icon="close"
                color={
                  !apiRequest.data?.visited
                    ? theme.colors.primary
                    : theme.colors.textSecondary
                }
                onPress={async () => {
                  await API({
                    method: "delete",
                    url: "/traveller/hotel/visited",
                    params: { hotelId: params.hotelId },
                  });
                  await refetchData();
                }}
              />
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
                    {hotelAmenities[amenity.toUpperCase()]}
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
                  compact
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
                    navigate("ReviewsScreen", {
                      nodeType: "hotel",
                      nodeId: params.hotelId,
                    });
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
        onSubmit={refetchData}
        nodeType="hotel"
        nodeId={params.hotelId}
      />
      <HotelBookingModal
        visible={hotelBookingModal.visible}
        onDismiss={hotelBookingModal.hide}
        hotelId={params.hotelId}
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
  TextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ActionsIcon: {
    margin: 0,
  },
};

export default HotelDetailsScreen;
