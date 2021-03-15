import React from "react";
import { View } from "react-native";
import { TextInput, IconButton } from "react-native-paper";

import BottomModal from "../BottomModal";
import Button from "../Button";
import screenStyles from "../../screens/styles";

import CardTitle from "../Typography/CardTitle";

const WriteReviewModal = ({ visible, onDismiss }) => {
  return (
    <BottomModal {...{ visible, onDismiss }}>
      <View>
        <View style={styles.Container}>
          <CardTitle style={styles.Title}>Review</CardTitle>
        </View>
        <View style={screenStyles.Section}>
          <View style={styles.RatingContainer}>
            <IconButton
              size={30}
              style={styles.RatingActionsIcon}
              icon="star"
              color="#F6C425"
              onPress={() => {
                // eslint-disable-next-line no-alert
                alert("WIP:  Details");
              }}
            />
            <IconButton
              size={30}
              style={styles.RatingActionsIcon}
              icon="star"
              color="#F6C425"
              onPress={() => {
                // eslint-disable-next-line no-alert
                alert("WIP:  Details");
              }}
            />
            <IconButton
              size={30}
              style={styles.RatingActionsIcon}
              icon="star"
              color="#F6C425"
              onPress={() => {
                // eslint-disable-next-line no-alert
                alert("WIP:  Details");
              }}
            />
            <IconButton
              size={30}
              style={styles.RatingActionsIcon}
              icon="star-outline"
              color="#9D9BA6"
              onPress={() => {
                // eslint-disable-next-line no-alert
                alert("WIP:  Details");
              }}
            />
            <IconButton
              size={30}
              style={styles.RatingActionsIcon}
              icon="star-outline"
              color="#9D9BA6"
              onPress={() => {
                // eslint-disable-next-line no-alert
                alert("WIP: Details");
              }}
            />
          </View>
        </View>
        <View style={screenStyles.Section}>
          <TextInput
            label="Write Review..."
            numberOfLines={3}
            multiline={true}
            style={screenStyles.FormInput}
          />
        </View>
        <View style={[screenStyles.FormInputContainer]}>
          <Button
            mode="outlined"
            style={screenStyles.FormInputLeft}
            onPress={() => {
              // eslint-disable-next-line no-alert
              alert("WIP: Open Contact Details");
            }}
          >
            Cancel
          </Button>
          <Button
            mode="contained"
            style={screenStyles.FormInputRight}
            onPress={() => {
              // eslint-disable-next-line no-alert
              alert("WIP: Open Contact Details");
            }}
          >
            Submit
          </Button>
        </View>
      </View>
    </BottomModal>
  );
};
const styles = {
  Container: {
    alignItems: "center",
    flexDirection: "row",
  },
  Title: {
    fontSize: 20,
  },
  RatingContainer: {
    flexDirection: "row",
    marginRight: 16,
  },
  RatingActionsIcon: {
    margin: -5,
  },
  FormInput: {
    marginBottom: 12,
  },
};
export default WriteReviewModal;
