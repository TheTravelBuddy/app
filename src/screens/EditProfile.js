import React, { useMemo } from "react";
import { View } from "react-native";
import { Avatar, TextInput } from "react-native-paper";

import commonStyles from "./styles";
import {
  Scaffold,
  CardTitle,
  Picker,
  DateTimePicker,
  Button,
} from "../components";

import useTextInput from "../hooks/useTextInput";
import usePicker from "../hooks/usePicker";
import useDateTimePicker from "../hooks/useDateTimePicker";
import { SCREEN_PADDING } from "../constants";

const today = new Date();
const initialDate = new Date(1900, 0, 2);

const EditProfileScreen = ({ navigation: { goBack } }) => {
  const name = useTextInput();
  const dob = useDateTimePicker(today);
  const gender = usePicker("M");
  const mood = usePicker("MIXED");

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
          source={{ uri: "https://picsum.photos/1420" }}
        />
        <View style={styles.ProfileDetails}>
          <CardTitle>+91123456789</CardTitle>
        </View>
      </View>
      <View style={[commonStyles.Section, commonStyles.ScreenPadded]}>
        <TextInput
          label="Name"
          {...name.props}
          style={commonStyles.FormInput}
        />
        <View style={commonStyles.FormInputContainer}>
          <DateTimePicker
            {...dob.props}
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
            label="Gender"
            style={[commonStyles.FormInput, commonStyles.FormInputRight]}
          />
        </View>
        <Picker
          label="Mood"
          {...mood.props}
          items={[
            { value: "RELAX", label: "Relax" },
            { value: "ADVENTURE", label: "Adventure" },
            { value: "MIXED", label: "Mixed" },
          ]}
          style={commonStyles.FormInput}
        />
        <Button mode="contained" onPress={() => {}}>
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
