import React, { useMemo } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "./styles";
import {
  Scaffold,
  Button,
  Picker,
  HorizontalScroller,
  BlogImageCard,
} from "../components";

const cardData = [
  {
    id: 1,
    coverUri: "https://picsum.photos/1003",
  },
  {
    id: 2,
    coverUri: "https://picsum.photos/1003",
  },
];

const CreateBlogScreen = () => {
  return (
    <Scaffold header={useMemo(() => ({ title: "Create Blog" }), [])}>
      <View style={styles.Section}>
        <Button
          mode="contained"
          icon="plus"
          style={[styles.ScreenPadded]}
          theme={{ colors: { primary: "white" } }}
          onPress={() => {}}
        >
          Add Images
        </Button>
      </View>
      <View style={styles.Section}>
        <HorizontalScroller>
          {cardData.map((cardDatadetails) => (
            <BlogImageCard key={cardDatadetails.id} {...cardDatadetails} />
          ))}
        </HorizontalScroller>
      </View>
      <View style={[styles.Section, styles.ScreenPadded]}>
        <TextInput label="Title" style={styles.FormInput} />
        <View style={styles.FormInputContainer}>
          <Picker
            label="Topic"
            items={[
              { value: "ADVENTURE", label: "Adventure" },
              { value: "Cuisine", label: "Cuisine" },
              { value: "Trekking", label: "Trekking" },
            ]}
            style={[styles.FormInput, styles.FormInputLeft]}
          />
          <TextInput
            label="Location"
            style={[styles.FormInput, styles.FormInputRight]}
          />
        </View>
        <TextInput
          label="Write Something..."
          numberOfLines={10}
          multiline={true}
          style={styles.FormInput}
        />
        <Button mode="contained" onPress={() => {}}>
          CREATE BLOG
        </Button>
      </View>
    </Scaffold>
  );
};

export default CreateBlogScreen;
