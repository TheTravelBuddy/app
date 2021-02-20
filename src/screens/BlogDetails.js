import React, { useMemo } from "react";
import { View, Image } from "react-native";
import { Avatar, FAB, useTheme, IconButton, Text } from "react-native-paper";

import screenStyles from "./styles";

import {
  SectionHeader,
  Scaffold,
  HorizontalScroller,
  Button,
  Chip,
  ScreenTitle,
  Paragraph,
  ReviewCard,
  CardTitle,
} from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";
import { CARD_SPACING, CHIP_SPACING, SCREEN_PADDING } from "../constants";

const blogDetails = {
  id: 1,
  name: "Masti in Mumbai",
  city: "Mumbai",
  topic: "Cusine",
  dop: "5 days ago",
  likes: 8,
  content:
    "Mumbai is a stunning paradox of hope and chaos, magic and madness. Where the changing modernity of India has been experienced most intensely. From Gandhi’s arrival from England in 1915 to the protests against the Simon Commission in 1928, Bombay, now Mumbai, has been home to many key events of the freedom struggle. ",
  photos: [
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/a5/d8/c1/exterior.jpg",
    "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/27/36/2736904_v5.jpeg",
    "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/99/50/99501_v5.jpeg",
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/a5/d8/c1/exterior.jpg",
  ],
};

const comments = [
  {
    id: 1,
    username: "Riddhi Dholakia",
    reviewText:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
  {
    id: 2,
    username: "Riddhi Dholakia",
    reviewText:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
];

const BlogDetailsScreen = ({ navigation: { goBack } }) => {
  const theme = useTheme();
  const { width } = useScreenDimensions();

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
    <Scaffold>
      <View>
        <HorizontalScroller gap={0} verticalSpacing={0} horizontalSpacing={0}>
          {blogDetails.photos.map((photoUri) => (
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
        </>
        <View style={([screenStyles.Section], { marginTop: 16 })}>
          <View style={[screenStyles.ScreenPadded]}>
            <ScreenTitle>{blogDetails.name}</ScreenTitle>
          </View>
        </View>
        <View style={screenStyles.Section}>
          <View style={styles.BlogdetailContainer}>
            <Chip
              icon="map-marker-outline"
              style={{ margin: CHIP_SPACING }}
              onPress={() => {}}
            >
              {blogDetails.city}
            </Chip>
            <Chip
              icon="card-text-outline"
              style={{ margin: CHIP_SPACING }}
              onPress={() => {}}
            >
              {blogDetails.topic}
            </Chip>
            <Chip
              icon="clock-outline"
              style={{ margin: CHIP_SPACING }}
              onPress={() => {}}
            >
              {blogDetails.dop}
            </Chip>
          </View>
        </View>
        <View
          style={[
            screenStyles.Section,
            screenStyles.ScreenPadded,
            { flexDirection: "row", alignItems: "center" },
          ]}
        >
          <Avatar.Image
            size={36}
            style={{ elevation: 4, marginRight: 12 }}
            source={{ uri: "https://picsum.photos/1420" }}
          />
          <CardTitle>Riddhi Dholakia</CardTitle>
        </View>

        <View style={screenStyles.Section}>
          <Paragraph style={screenStyles.ScreenPadded}>
            {blogDetails.content}
          </Paragraph>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            marginRight: 16,
          }}
        >
          <IconButton
            size={22}
            color={theme.colors.textSecondary}
            style={styles.CardActionsIcon}
            icon="heart-outline"
            onPress={() => {}}
          />
          <Text style={{ color: theme.colors.textSecondary, fontSize: 16 }}>
            {blogDetails.likes}
          </Text>
        </View>

        <View style={screenStyles.Section}>
          <View style={screenStyles.SectionHeader}>
            <SectionHeader style={[screenStyles.ScreenPadded, SectionHeader]}>
              Comments
            </SectionHeader>
          </View>
          <View style={screenStyles.ScreenPadded}>
            {comments.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
            <Button
              compact
              style={styles.SectionRightButton}
              onPress={() => {}}
            >
              Read More Comments
            </Button>
          </View>
        </View>
      </View>
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
  BlogdetailContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: SCREEN_PADDING - CHIP_SPACING,
  },
  SectionRightButton: {
    alignSelf: "flex-end",
  },
};

export default BlogDetailsScreen;
