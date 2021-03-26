import React, { useMemo } from "react";
import { View, Image } from "react-native";
import { FAB, useTheme, IconButton, Card } from "react-native-paper";
import Timeline from "react-native-timeline-flatlist";

import screenStyles from "./styles";

import {
  SectionHeader,
  Scaffold,
  HorizontalScroller,
  PackageDurationSubtitle,
  Button,
  SectionSubtitle,
  Chip,
  ScreenTitle,
  RatingPill,
  SearchPackagePriceSummary,
  Paragraph,
  ReviewCard,
  AboutAgencyModal,
  WriteReviewModal,
  RenderOnLoad,
  CardTitle,
} from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";
import useToggle from "../hooks/useToggle";
import {
  CARD_SPACING,
  CHIP_SPACING,
  packageAmenities,
  SCREEN_PADDING,
} from "../constants";
import API, { useAPI } from "../helpers/API";
import { openPhone } from "../helpers/links";

const PackageDetailsScreen = ({
  navigation: { goBack, navigate },
  route: { params },
}) => {
  const theme = useTheme();
  const { width } = useScreenDimensions();
  const aboutAgencyModal = useToggle(false);
  const writeReviewModal = useToggle(false);

  const [apiRequest, refetchData] = useAPI({
    url: "/traveller/package",
    params: { packageId: params.packageId },
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
            <SearchPackagePriceSummary
              style={screenStyles.FlexMore}
              price={apiRequest.data?.price}
            />
            <Button
              mode="contained"
              style={screenStyles.Flex}
              onPress={() => {
                navigate("PackageBookingScreen");
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
                  onPress={
                    apiRequest.data.liked
                      ? async () => {
                          await API({
                            method: "delete",
                            url: "/traveller/package/like",
                            params: { packageId: params.packageId },
                          });
                          await refetchData();
                        }
                      : async () => {
                          await API({
                            method: "post",
                            url: "/traveller/package/like",
                            params: { packageId: params.packageId },
                          });
                          await refetchData();
                        }
                  }
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
                {!!apiRequest.data?.days.length && (
                  <PackageDurationSubtitle
                    style={screenStyles.ScreenPadded}
                    nights={apiRequest.data?.days.length - 1}
                    days={apiRequest.data?.days.length}
                  />
                )}
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
                    icon="information-outline"
                    style={screenStyles.FormInputLeft}
                    theme={whiteButtonTheme}
                    onPress={aboutAgencyModal.show}
                  >
                    About Agency
                  </Button>
                  <Button
                    mode="contained"
                    icon="phone-outline"
                    style={screenStyles.FormInputRight}
                    theme={whiteButtonTheme}
                    onPress={() => {
                      openPhone({
                        phoneNumber: apiRequest.data?.agency.phone,
                      });
                    }}
                  >
                    Contact Us
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
                  {apiRequest.data?.description}
                </Paragraph>
              </View>
              <View style={[screenStyles.ScreenPadded, styles.TextContainer]}>
                <SectionSubtitle
                  style={[screenStyles.SectionHeader, screenStyles.Flex]}
                >
                  Have you tried this package before?
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
                      url: "/traveller/package/visited",
                      params: { packageId: params.packageId },
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
                      url: "/traveller/package/visited",
                      params: { packageId: params.packageId },
                    });
                    await refetchData();
                  }}
                />
              </View>
              <View style={screenStyles.Section}>
                <SectionHeader
                  style={[
                    screenStyles.ScreenPadded,
                    screenStyles.SectionHeader,
                  ]}
                >
                  Included in the package
                </SectionHeader>
                <View style={styles.AmenitiesContainer}>
                  {apiRequest.data?.amenities.map((amenity) => (
                    <Chip key={amenity} style={{ margin: CHIP_SPACING }}>
                      {packageAmenities[amenity]}
                    </Chip>
                  ))}
                </View>
                {!!apiRequest.data?.days.length && (
                  <View style={screenStyles.Section}>
                    <SectionHeader
                      style={[
                        screenStyles.ScreenPadded,
                        screenStyles.SectionHeader,
                      ]}
                    >
                      Itinerary
                    </SectionHeader>
                    <Timeline
                      data={apiRequest.data?.days}
                      lineColor={theme.colors.primary}
                      circleColor={theme.colors.primary}
                      innerCircle="dot"
                      renderTime={(data) => (
                        <View style={{ paddingLeft: SCREEN_PADDING }}>
                          <Chip>{`Day ${data.day}`}</Chip>
                        </View>
                      )}
                      renderDetail={(data) => (
                        <Card style={{ marginRight: SCREEN_PADDING }}>
                          <Card.Content>
                            <CardTitle>{data.title}</CardTitle>
                            {data.description && (
                              <Paragraph>{data.description}</Paragraph>
                            )}
                          </Card.Content>
                        </Card>
                      )}
                    />
                  </View>
                )}
              </View>
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
                      navigate("ReviewsScreen", {
                        nodeType: "package",
                        nodeId: params.packageId,
                      });
                    }}
                  >
                    Read More Reviews
                  </Button>
                </View>
              </View>
            </View>
            <AboutAgencyModal
              key={apiRequest.data?.agency.id}
              {...apiRequest.data?.agency}
              visible={aboutAgencyModal.visible}
              onDismiss={aboutAgencyModal.hide}
            />
            <WriteReviewModal
              visible={writeReviewModal.visible}
              onDismiss={writeReviewModal.hide}
              onSubmit={refetchData}
              nodeType="package"
              nodeId={params.packageId}
            />
          </>
        )}
      </RenderOnLoad>
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

export default PackageDetailsScreen;
