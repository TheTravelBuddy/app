import React, { useCallback } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

import styles from "./styles/authStyles";
import { Scaffold, Button, Title, Label } from "../components";
import useTextInput from "../hooks/useTextInput";
import useToggle from "../hooks/useToggle";
import { useAuth } from "../stores/Auth";

const SignUpScreen = () => {
  const logout = useAuth((state) => state.logout);
  const register = useAuth((state) => state.register);
  const logoutLoading = useToggle(false);
  const registerLoading = useToggle(false);
  const name = useTextInput();
  const dob = useTextInput();
  const gender = useTextInput();
  const mood = useTextInput();

  const handleLogout = useCallback(() => {
    logoutLoading.start();
    logout().catch(() => {
      logoutLoading.stop();
    });
  }, [logoutLoading, logout]);

  const handleRegister = useCallback(() => {
    registerLoading.start();
    register({
      name: name.value,
      dob: dob.value,
      gender: gender.value,
    }).catch(() => {
      registerLoading.stop();
    });
  }, [name.value, dob.value, gender.value, registerLoading, register]);

  return (
    <Scaffold>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <Title style={styles.HeaderTitle}>Travel Buddy</Title>
        </View>
        <View>
          <Label>Before we start, tell us something about you.</Label>
          <TextInput
            label="Name"
            {...name.props}
            disabled={logoutLoading.state || registerLoading.state}
            style={styles.FormInput}
          />
          <View style={styles.FormInputContainer}>
            <TextInput
              {...dob.props}
              disabled={logoutLoading.state || registerLoading.state}
              label="DOB"
              style={[styles.FormInput, styles.FormInputLeft]}
            />
            <TextInput
              {...gender.props}
              disabled={logoutLoading.state || registerLoading.state}
              label="Gender"
              style={[styles.FormInput, styles.FormInputRight]}
            />
          </View>
          <TextInput
            label="Mood"
            {...mood.props}
            disabled={logoutLoading.state || registerLoading.state}
            style={styles.FormInput}
          />
          <View style={styles.FormInputContainer}>
            <Button
              disabled={logoutLoading.state || registerLoading.state}
              loading={logoutLoading.state}
              style={styles.FormInputLeft}
              onPress={handleLogout}
              mode="outlined"
            >
              Cancel
            </Button>
            <Button
              disabled={logoutLoading.state || registerLoading.state}
              loading={registerLoading.state}
              style={styles.FormInputRight}
              mode="contained"
              onPress={handleRegister}
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
