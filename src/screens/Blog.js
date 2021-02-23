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
  CommentCard,
  CardTitle,
} from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";
import { CHIP_SPACING, SCREEN_PADDING } from "../constants";

const blogDetails = {
  id: 1,
  name: "Masti in Mumbai",
  city: "Mumbai",
  topic: "Cusine",
  dop: "5 days ago",
  likes: 15,
  content:
    "Mumbai is a stunning paradox of hope and chaos, magic and madness. Where the changing modernity of India has been experienced most intensely. From Gandhi’s arrival from England in 1915 to the protests against the Simon Commission in 1928, Bombay, now Mumbai, has been home to many key events of the freedom struggle, Mumbai has different aspects with art, heritage and Culture. During the festivals, we ensure that you get the glimpse of prominent things like Visarjan at Chaupatty, fire cracker celebration during Diwali at Marine Drive and much more, The prime benefit of hiring us is that we are very feasible with prices and you could easily book us. ",
  photos: [
    "https://picsum.photos/1098",
    "https://picsum.photos/1097",
    "https://picsum.photos/1099",
    "https://picsum.photos/1100",
  ],
};

const comments = [
  {
    id: 1,
    username: "Guddi M",
    commentText:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
  {
    id: 2,
    username: "Divya Jain",
    commentText:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
  {
    id: 3,
    username: "Tanvi Inch",
    commentText:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
];

const BlogScreen = ({ navigation: { goBack } }) => {
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
          <View style={styles.BlogDetailContainer}>
            <Chip
              icon="map-marker-outline"
              style={styles.BlogDetailChip}
              onPress={() => {}}
            >
              {blogDetails.city}
            </Chip>
            <Chip
              icon="card-text-outline"
              style={styles.BlogDetailChip}
              onPress={() => {}}
            >
              {blogDetails.topic}
            </Chip>
            <Chip icon="clock-outline" style={styles.BlogDetailChip}>
              {blogDetails.dop}
            </Chip>
          </View>
        </View>
        <View
          style={[
            screenStyles.Section,
            screenStyles.ScreenPadded,
            styles.UserDetails,
          ]}
        >
          <Avatar.Image
            size={24}
            style={styles.ProflieImage}
            source={{ uri: "https://picsum.photos/1420" }}
          />
          <CardTitle>Riddhi Dholakia</CardTitle>
        </View>
        <View style={screenStyles.Section}>
          <Paragraph style={[screenStyles.ScreenPadded, styles.BlogContent]}>
            {blogDetails.content}
          </Paragraph>
        </View>
        <View style={styles.LikesContainer}>
          <IconButton
            size={22}
            color={theme.colors.textSecondary}
            style={styles.LikesActionsIcon}
            icon="heart-outline"
            onPress={() => {}}
          />
          <Text
            style={[
              { color: theme.colors.textSecondary },
              styles.CardActionsText,
            ]}
          >
            {blogDetails.likes}
          </Text>
        </View>
        <View style={screenStyles.Section}>
          <SectionHeader
            style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
          >
            Comments
          </SectionHeader>
          <View style={screenStyles.ScreenPadded}>
            {comments.map((comment) => (
              <CommentCard key={comment.id} {...comment} />
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
  BlogDetailContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: SCREEN_PADDING - CHIP_SPACING,
  },
  BlogContent: {
    lineHeight: 24,
    letterSpacing: 0.5,
    textAlign: "justify",
  },
  BlogDetailChip: {
    margin: CHIP_SPACING,
  },
  SectionRightButton: {
    alignSelf: "flex-end",
  },
  UserDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  ProflieImage: {
    marginRight: 12,
  },
  LikesContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 16,
  },
  LikesActionsIcon: {
    margin: 0,
  },
  LikesActionsText: {
    fontSize: 16,
  },
};

export default BlogScreen;
