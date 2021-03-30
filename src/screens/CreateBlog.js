import React, { useMemo, useCallback } from "react";
import { View } from "react-native";
import { TextInput, useTheme } from "react-native-paper";
import styles from "./styles";
import {
  Scaffold,
  Button,
  Picker,
  HorizontalScroller,
  BlogImageCard,
} from "../components";
import API, { useAPI } from "../helpers/API";
import usePicker from "../hooks/usePicker";
import useArray from "../hooks/useArray";
import useTextInput from "../hooks/useTextInput";
import { chooseFile, uploadImageToStorage } from "../helpers/image";
import useToggle from "../hooks/useToggle";

const CreateBlogScreen = ({ navigation: { replace } }) => {
  const theme = useTheme();
  const [topicsRequest] = useAPI("/traveller/blog/topic");
  const [citiesRequest] = useAPI("/traveller/city");

  const loading = useToggle(false);

  const topic = usePicker();
  const city = usePicker();
  const photos = useArray();
  const title = useTextInput();
  const content = useTextInput();

  const whiteButtonTheme = useMemo(
    () => ({
      colors: {
        primary: theme.colors.surface,
        accent: theme.colors.surface,
      },
    }),
    [theme.colors.surface]
  );

  const handleAddPhoto = useCallback(async () => {
    const path = await chooseFile();
    const url = await uploadImageToStorage(
      path,
      `blog_${+new Date()}.${path.split(".").pop()}`
    );
    photos.push(url);
  }, [photos]);

  const handleSubmitBlog = useCallback(() => {
    loading.start();
    API({
      url: `/traveller/blog`,
      method: "post",
      data: {
        title: title.value,
        content: content.value,
        photos: photos.value,
        topic: topic.value,
        location: city.value,
      },
    })
      .then((response) => {
        console.log(response);
        const { data: blogId } = response;
        replace("BlogScreen", { blogId });
      })
      .catch(console.log)
      .finally(() => {
        loading.stop();
      });
  }, [
    title.value,
    content.value,
    photos.value,
    city.value,
    topic.value,
    loading,
    replace,
  ]);

  return (
    <Scaffold header={useMemo(() => ({ title: "Create Blog" }), [])}>
      <View style={styles.Section}>
        <Button
          mode="contained"
          icon="plus"
          style={[styles.ScreenPadded]}
          theme={whiteButtonTheme}
          onPress={handleAddPhoto}
        >
          Add Images
        </Button>
      </View>
      <View style={styles.Section}>
        <HorizontalScroller>
          {photos.value.map((photo) => (
            <BlogImageCard key={photo} {...{ photo }} />
          ))}
        </HorizontalScroller>
      </View>
      <View style={[styles.Section, styles.ScreenPadded]}>
        <TextInput label="Title" style={styles.FormInput} {...title.props} />
        <View style={styles.FormInputContainer}>
          <Picker
            label="Topic"
            items={
              topicsRequest.data?.map(({ id, name }) => ({
                value: id,
                label: name,
              })) || []
            }
            {...topic.props}
            style={[styles.FormInput, styles.FormInputLeft]}
          />
          <Picker
            label="Location"
            items={
              citiesRequest.data?.map(({ id, name }) => ({
                value: id,
                label: name,
              })) || []
            }
            {...city.props}
            style={[styles.FormInput, styles.FormInputRight]}
          />
        </View>
        <TextInput
          label="Write Something..."
          numberOfLines={10}
          multiline={true}
          style={styles.FormInput}
          {...content.props}
        />
        <Button mode="contained" onPress={handleSubmitBlog}>
          CREATE BLOG
        </Button>
      </View>
    </Scaffold>
  );
};

export default CreateBlogScreen;
