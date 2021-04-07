import React, { useMemo, useCallback } from "react";
import { View, Image } from "react-native";
import { FAB, useTheme, IconButton } from "react-native-paper";

import screenStyles from "./styles";

import {
  SectionHeader,
  Scaffold,
  HorizontalScroller,
  Button,
  ScreenTitle,
  RatingPill,
  Paragraph,
  ReviewCard,
  AttractionCard,
  HotelDetailCard,
  PackageDetailCard,
  BlogCard,
  WriteReviewModal,
  SectionSubtitle,
  RenderOnLoad,
} from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";
import { SCREEN_PADDING } from "../constants";
import useToggle from "../hooks/useToggle";
import API, { useAPI } from "../helpers/API";
import { openMapLocationName } from "../helpers/links";

const CityDetailsScreen = ({
  navigation: { goBack, navigate },
  route: { params },
}) => {
  const theme = useTheme();
  const { width } = useScreenDimensions();
  const writeReviewModal = useToggle(false);

  const [apiRequest, refetchData] = useAPI({
    url: "/traveller/city",
    params: { cityId: params.cityId },
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

  const likeCity = useCallback(async () => {
    await API({
      method: "post",
      url: "/traveller/city/like",
      params: { cityId: params.cityId },
    });
    await refetchData();
  }, [refetchData, params.cityId]);

  const unlikeCity = useCallback(async () => {
    await API({
      method: "delete",
      url: "/traveller/city/like",
      params: { cityId: params.cityId },
    });
    await refetchData();
  }, [refetchData, params.cityId]);

  return (
    <Scaffold>
      <RenderOnLoad loading={!apiRequest?.data}>
        {() => (
          <>
            <View>
              <HorizontalScroller
                gap={0}
                verticalSpacing={0}
                horizontalSpacing={0}
              >
                {apiRequest.data?.photos.map((photoUri) => (
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
                  onPress={apiRequest.data.liked ? unlikeCity : likeCity}
                />
              </>
              <View style={[screenStyles.Section]}>
                <View
                  style={[screenStyles.ScreenPadded, styles.TitleContainer]}
                >
                  <ScreenTitle style={screenStyles.Flex}>
                    {apiRequest.data?.name}
                  </ScreenTitle>
                  <RatingPill rating={apiRequest.data?.rating} />
                </View>
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
                      openMapLocationName({ location: apiRequest.data?.name });
                    }}
                  >
                    View on map
                  </Button>
                </View>
              </View>
              <View style={screenStyles.Section}>
                <SectionHeader
                  style={[
                    screenStyles.ScreenPadded,
                    screenStyles.SectionHeader,
                  ]}
                >
                  About
                </SectionHeader>
                <Paragraph style={screenStyles.ScreenPadded}>
                  {apiRequest.data?.about}
                </Paragraph>
              </View>

              <View style={[screenStyles.ScreenPadded, styles.TextContainer]}>
                <SectionSubtitle
                  style={[screenStyles.SectionHeader, screenStyles.Flex]}
                >
                  Have you visited this city before?
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
                      url: "/traveller/city/visited",
                      params: { cityId: params.cityId },
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
                      url: "/traveller/city/visited",
                      params: { cityId: params.cityId },
                    });
                    await refetchData();
                  }}
                />
              </View>

              {apiRequest.data?.topAttractions && (
                <View style={screenStyles.Section}>
                  <SectionHeader
                    style={[
                      screenStyles.ScreenPadded,
                      screenStyles.SectionHeader,
                    ]}
                  >
                    Places to Visit
                  </SectionHeader>
                  <HorizontalScroller>
                    {apiRequest.data?.topAttractions?.map(
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

              {apiRequest.data?.topPackages && (
                <View style={screenStyles.Section}>
                  <SectionHeader
                    style={[
                      screenStyles.ScreenPadded,
                      screenStyles.SectionHeader,
                    ]}
                  >
                    Popular Packages
                  </SectionHeader>
                  <HorizontalScroller>
                    {apiRequest.data?.topPackages?.map((packageDetails) => (
                      <PackageDetailCard
                        key={packageDetails.id}
                        {...packageDetails}
                      />
                    ))}
                  </HorizontalScroller>
                </View>
              )}
              {apiRequest.data?.topHotels && (
                <View style={screenStyles.Section}>
                  <SectionHeader
                    style={[
                      screenStyles.ScreenPadded,
                      screenStyles.SectionHeader,
                    ]}
                  >
                    Top Hotels
                  </SectionHeader>
                  <HorizontalScroller>
                    {apiRequest.data?.topHotels?.map((hotelDetails) => (
                      <HotelDetailCard
                        key={hotelDetails.id}
                        {...hotelDetails}
                      />
                    ))}
                  </HorizontalScroller>
                </View>
              )}
              {apiRequest.data?.topBlogs && (
                <View style={screenStyles.Section}>
                  <SectionHeader
                    style={[
                      screenStyles.ScreenPadded,
                      screenStyles.SectionHeader,
                    ]}
                  >
                    Top Liked Blogs
                  </SectionHeader>
                  <HorizontalScroller>
                    {apiRequest.data?.topBlogs?.map((blogDetails) => (
                      <BlogCard key={blogDetails.id} {...blogDetails} />
                    ))}
                  </HorizontalScroller>
                </View>
              )}
              <View style={screenStyles.Section}>
                <SectionHeader
                  style={[
                    screenStyles.ScreenPadded,
                    screenStyles.SectionHeader,
                  ]}
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
                  {apiRequest.data?.reviews.map((review) => (
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
            <WriteReviewModal
              visible={writeReviewModal.visible}
              onDismiss={writeReviewModal.hide}
            />
          </>
        )}
      </RenderOnLoad>
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

export default CityDetailsScreen;
