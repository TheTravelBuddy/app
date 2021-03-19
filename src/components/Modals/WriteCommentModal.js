import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

import BottomModal from "../BottomModal";
import Button from "../Button";
import screenStyles from "../../screens/styles";

import CardTitle from "../Typography/CardTitle";
import { CARD_SPACING } from "../../constants";

const WriteCommentModal = ({ visible, onDismiss }) => {
  return (
    <BottomModal {...{ visible, onDismiss }}>
      <>
        <CardTitle style={styles.Title}>Write a Comment</CardTitle>
        <View style={screenStyles.Section}>
          <TextInput
            label="Write comment..."
            numberOfLines={3}
            multiline={true}
            style={styles.FormInput}
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
              alert("WIP: Submit Comment");
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
  FormInput: {
    marginBottom: CARD_SPACING / 2,
  },
};
export default WriteCommentModal;
