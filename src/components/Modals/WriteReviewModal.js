import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

import BottomModal from "../BottomModal";
import Button from "../Button";
import screenStyles from "../../screens/styles";

import CardTitle from "../Typography/CardTitle";
import { CARD_SPACING, SCREEN_PADDING } from "../../constants";
import RatingInput from "../RatingInput";
import usePicker from "../../hooks/usePicker";
import useTextInput from "../../hooks/useTextInput";
import API from "../../helpers/API";
import useToggle from "../../hooks/useToggle";

const WriteReviewModal = ({
  visible,
  onDismiss,
  nodeType,
  nodeId,
  onSubmit,
}) => {
  const rating = usePicker();
  const review = useTextInput();
  const loading = useToggle(false);

  return (
    <BottomModal {...{ visible, onDismiss }}>
      <>
        <View style={styles.Container}>
          <CardTitle style={styles.Title}>Write a Review</CardTitle>
        </View>
        <View style={screenStyles.Section}>
          <RatingInput {...rating.props} style={styles.RatingInput} />
          <TextInput
            label="Write Review..."
            numberOfLines={3}
            multiline={true}
            style={screenStyles.FormInput}
            {...review.props}
          />
        </View>
        <View style={[screenStyles.FormInputContainer]}>
          <Button
            compact
            mode="outlined"
            style={screenStyles.FormInputLeft}
            onPress={onDismiss}
            disabled={loading.value}
          >
            Cancel
          </Button>
          <Button
            compact
            mode="contained"
            style={screenStyles.FormInputRight}
            disabled={loading.value}
            loading={loading.value}
            onPress={() => {
              loading.start();
              API({
                url: `/traveller/${nodeType}/review`,
                method: "post",
                params: { [`${nodeType}Id`]: nodeId },
                data: { rating: rating.value, review: review.value },
              })
                .then(onSubmit)
                .catch(console.log)
                .finally(() => {
                  loading.stop();
                  onDismiss();
                });
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
  RatingInput: {
    marginBottom: SCREEN_PADDING / 2,
  },
  FormInput: {
    marginBottom: CARD_SPACING / 2,
  },
};
export default WriteReviewModal;
