import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

import styles from "./styles/authStyles";
import { Scaffold, Button, Title, Label } from "../components";
import { useAuth } from "../stores/Auth";

const SignUpScreen = () => {
  const logout = useAuth((state) => state.logout);

  return (
    <Scaffold>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <Title style={styles.HeaderTitle}>Travel Buddy</Title>
        </View>
        <View>
          <Label>Before we start, tell us something about you.</Label>
          <TextInput label="Name" style={styles.FormInput} />
          <View style={styles.FormInputContainer}>
            <TextInput
              label="DOB"
              style={[styles.FormInput, styles.FormInputLeft]}
            />
            <TextInput
              label="Gender"
              style={[styles.FormInput, styles.FormInputRight]}
            />
          </View>
          <TextInput label="Prefered Seasons" style={styles.FormInput} />
          <View style={styles.FormInputContainer}>
            <Button
              style={styles.FormInputLeft}
              onPress={logout}
              mode="outlined"
            >
              Cancel
            </Button>
            <Button
              style={styles.FormInputRight}
              mode="contained"
              onPress={() => {}}
            >
              Save
            </Button>
          </View>
        </View>
      </View>
    </Scaffold>
  );
};

export default SignUpScreen;
