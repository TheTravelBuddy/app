import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

import BottomModal from "../BottomModal";
import Button from "../Button";
import screenStyles from "../../screens/styles";

import CardTitle from "../Typography/CardTitle";

const WriteCommentModal = ({ visible, onDismiss }) => {
  return (
    <BottomModal {...{ visible, onDismiss }}>
      <View>
        <View style={styles.Container}>
          <CardTitle style={styles.Title}>Comment</CardTitle>
        </View>

        <View style={screenStyles.Section}>
          <TextInput
            label="Add a comment..."
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
  FormInput: {
    marginBottom: 12,
  },
};
export default WriteCommentModal;
