import React, { useMemo, useCallback } from "react";
import { View, Image } from "react-native";
import { Avatar, FAB, useTheme, IconButton, Text } from "react-native-paper";
import moment from "moment";

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
  RenderOnLoad,
  WriteCommentModal,
} from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";
import { CHIP_SPACING, SCREEN_PADDING } from "../constants";
import API, { useAPI } from "../helpers/API";
import useToggle from "../hooks/useToggle";

const BlogScreen = ({
  navigation: { goBack, navigate },
  route: { params },
}) => {
  const theme = useTheme();
  const { width } = useScreenDimensions();

  const [apiRequest, refetchData] = useAPI({
    url: "/traveller/blog",
    params: { blogId: params.blogId },
  });

  const likeBlog = useCallback(async () => {
    await API({
      method: "post",
      url: "/traveller/blog/like",
      params: { blogId: params.blogId },
    });
    await refetchData();
  }, [refetchData, params.blogId]);

  const unlikeBlog = useCallback(async () => {
    await API({
      method: "delete",
      url: "/traveller/blog/unlike",
      params: { blogId: params.blogId },
    });
    await refetchData();
  }, [refetchData, params.blogId]);

  const whiteButtonTheme = useMemo(
    () => ({
      colors: {
        primary: theme.colors.surface,
        accent: theme.colors.surface,
      },
    }),
    [theme.colors.surface]
  );
  const writeCommentModal = useToggle(false);
  return (
    <Scaffold>
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
                  source={{ uri: photoUri }}
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
                <ScreenTitle>{apiRequest.data.title}</ScreenTitle>
              </View>
            </View>
            <View style={screenStyles.Section}>
              <View style={styles.BlogDetailContainer}>
                <Chip icon="map-marker-outline" style={styles.BlogDetailChip}>
                  {apiRequest.data.location}
                </Chip>
                <Chip icon="card-text-outline" style={styles.BlogDetailChip}>
                  {apiRequest.data.topic}
                </Chip>
                <Chip icon="clock-outline" style={styles.BlogDetailChip}>
                  {moment(apiRequest.data.publishedOn).fromNow()}
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
                source={{ uri: apiRequest.data.authorProfile }}
              />
              <CardTitle>{apiRequest.data.authorName}</CardTitle>
            </View>
            <View style={screenStyles.Section}>
              <Paragraph
                style={[screenStyles.ScreenPadded, styles.BlogContent]}
              >
                {apiRequest.data.content}
              </Paragraph>
            </View>
            <View style={styles.LikesContainer}>
              <IconButton
                size={22}
                style={styles.LikesActionsIcon}
                color={
                  apiRequest.data.liked ? "#EB453D" : theme.colors.textSecondary
                }
                icon={apiRequest.data.liked ? "heart" : "heart-outline"}
                onPress={apiRequest.data.liked ? unlikeBlog : likeBlog}
              />
              <Text
                style={[
                  { color: theme.colors.textSecondary },
                  styles.CardActionsText,
                ]}
              >
                {apiRequest.data.likes}
              </Text>
            </View>
            <View style={screenStyles.Section}>
              <SectionHeader
                style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
              >
                Comments
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
                  onPress={writeCommentModal.show}
                >
                  Write Comment
                </Button>
              </View>
              <View style={screenStyles.ScreenPadded}>
                {apiRequest.data.comments.map((comment) => (
                  <CommentCard key={comment.name} {...comment} />
                ))}
                <Button
                  compact
                  style={styles.SectionRightButton}
                  onPress={() => {
                    navigate("CommentsScreen");
                  }}
                >
                  Read More Comments
                </Button>
              </View>
            </View>
          </View>
        )}
      </RenderOnLoad>
      <WriteCommentModal
        visible={writeCommentModal.visible}
        onDismiss={writeCommentModal.hide}
      />
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
