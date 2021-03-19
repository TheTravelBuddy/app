import React from "react";
import { View } from "react-native";
import { TextInput, IconButton, useTheme } from "react-native-paper";

import BottomModal from "../BottomModal";
import Button from "../Button";
import screenStyles from "../../screens/styles";

import CardTitle from "../Typography/CardTitle";
import { CARD_SPACING, SCREEN_PADDING } from "../../constants";

const WriteReviewModal = ({ visible, onDismiss }) => {
  const theme = useTheme();

  return (
    <BottomModal {...{ visible, onDismiss }}>
      <>
        <View style={styles.Container}>
          <CardTitle style={styles.Title}>Write a Review</CardTitle>
        </View>
        <View style={screenStyles.Section}>
          <View style={styles.RatingContainer}>
            <IconButton
              size={28}
              style={styles.RatingActionsIcon}
              icon="star"
              color={theme.colors.star}
              onPress={() => {
                // eslint-disable-next-line no-alert
                alert("WIP:  Details");
              }}
            />
            <IconButton
              size={28}
              style={styles.RatingActionsIcon}
              icon="star"
              color={theme.colors.star}
              onPress={() => {
                // eslint-disable-next-line no-alert
                alert("WIP:  Details");
              }}
            />
            <IconButton
              size={28}
              style={styles.RatingActionsIcon}
              icon="star"
              color={theme.colors.star}
              onPress={() => {
                // eslint-disable-next-line no-alert
                alert("WIP:  Details");
              }}
            />
            <IconButton
              size={28}
              style={styles.RatingActionsIcon}
              icon="star-outline"
              color={theme.colors.textSecondary}
              onPress={() => {
                // eslint-disable-next-line no-alert
                alert("WIP:  Details");
              }}
            />
            <IconButton
              size={28}
              style={styles.RatingActionsIcon}
              icon="star-outline"
              color={theme.colors.textSecondary}
              onPress={() => {
                // eslint-disable-next-line no-alert
                alert("WIP: Details");
              }}
            />
          </View>
          <TextInput
            label="Write Review..."
            numberOfLines={3}
            multiline={true}
            // style={screenStyles.FormInput}
          />
        </View>
        <View style={[screenStyles.FormInputContainer]}>
          <Button
            compact
            mode="outlined"
            style={screenStyles.FormInputLeft}
            onPress={onDismiss}
          >
            Cancel
          </Button>
          <Button
            compact
            mode="contained"
            style={screenStyles.FormInputRight}
            onPress={() => {
              // eslint-disable-next-line no-alert
              alert("WIP: Submit Review");
            }}
          >
            Submit
          </Button>
        </View>
      </>
    </BottomModal>
  );
};
const styles = {
  Title: {
    fontSize: 20,
  },
  RatingContainer: {
    flexDirection: "row",
    marginBottom: SCREEN_PADDING / 2,
  },
  RatingActionsIcon: {
    margin: -8,
  },
  FormInput: {
    marginBottom: CARD_SPACING / 2,
  },
};
export default WriteReviewModal;
