import React, { useMemo, useCallback } from "react";
import { View } from "react-native";
import { Avatar, TextInput } from "react-native-paper";
import moment from "moment";

import commonStyles from "./styles";
import {
  Scaffold,
  CardTitle,
  Picker,
  DateTimePicker,
  Button,
} from "../components";

import { useReactiveTextInput } from "../hooks/useTextInput";
import { useReactivePicker } from "../hooks/usePicker";
import { useReactiveDateTimePicker } from "../hooks/useDateTimePicker";
import { SCREEN_PADDING } from "../constants";
import { useAuth } from "../stores/Auth";
import useToggle from "../hooks/useToggle";

const today = new Date();
const initialDate = new Date(1900, 0, 2);

const EditProfileScreen = ({ navigation: { goBack } }) => {
  const userDetails = useAuth((state) => state.user);
  const updateProfile = useAuth((state) => state.updateProfile);

  const name = useReactiveTextInput(userDetails.name);
  const dob = useReactiveDateTimePicker(userDetails.dob);
  const gender = useReactivePicker(userDetails.gender);
  const mood = useReactivePicker(userDetails.mood);
  const updateLoading = useToggle(false);

  const updateHandler = useCallback(() => {
    updateLoading.start();
    updateProfile({
      name: name.value,
      dob: moment(dob.value).format("YYYY-MM-DD"),
      gender: gender.value,
      mood: mood.value,
    })
      .catch(() => {
        updateLoading.stop();
      })
      .then(goBack);
  }, [
    name.value,
    dob.value,
    gender.value,
    mood.value,
    updateProfile,
    updateLoading,
    goBack,
  ]);

  return (
    <Scaffold
      header={useMemo(() => ({ title: "Edit Profile", backAction: goBack }), [
        goBack,
      ])}
    >
      <View style={styles.ProfileContainer}>
        <Avatar.Image
          size={108}
          style={styles.ProfileImage}
          source={{ uri: userDetails.profilePicture }}
        />
        <View style={styles.ProfileDetails}>
          <CardTitle>{userDetails.phoneNumber}</CardTitle>
        </View>
      </View>
      <View style={[commonStyles.Section, commonStyles.ScreenPadded]}>
        <TextInput
          label="Name"
          {...name.props}
          disabled={updateLoading.state}
          style={commonStyles.FormInput}
        />
        <View style={commonStyles.FormInputContainer}>
          <DateTimePicker
            {...dob.props}
            disabled={updateLoading.state}
            style={[commonStyles.FormInput, commonStyles.FormInputLeft]}
            label="DOB"
            maximumDate={today}
            minimumDate={initialDate}
          />
          <Picker
            {...gender.props}
            items={[
              { value: "M", label: "Male" },
              { value: "F", label: "Female" },
              { value: "O", label: "Other" },
            ]}
            disabled={updateLoading.state}
            label="Gender"
            style={[commonStyles.FormInput, commonStyles.FormInputRight]}
          />
        </View>
        <Picker
          label="Mood"
          {...mood.props}
          disabled={updateLoading.state}
          items={[
            { value: "RELAX", label: "Relax" },
            { value: "ADVENTURE", label: "Adventure" },
            { value: "MIXED", label: "Mixed" },
          ]}
          style={commonStyles.FormInput}
        />
        <Button
          mode="contained"
          onPress={updateHandler}
          loading={updateLoading.state}
          disabled={updateLoading.state}
        >
          Save details
        </Button>
      </View>
    </Scaffold>
  );
};

const styles = {
  ProfileContainer: {
    margin: SCREEN_PADDING,
  },
  ProfileDetails: {
    marginVertical: SCREEN_PADDING,
    alignItems: "center",
    justifyContent: "center",
  },
  ProfileImage: {
    alignSelf: "center",
  },
};

export default EditProfileScreen;
