import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { TextInput, Snackbar } from "react-native-paper";

import styles from "./styles/authStyles";
import { SCREEN_PADDING } from "../constants";
import { Scaffold, Button, Title, Tagline } from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";
import LoginIllustration from "../../assets/illustrations/LoginIllustration.svg";
import useTextInput from "../hooks/useTextInput";
import useToggle from "../hooks/useToggle";
import useSnackbarHandler from "../hooks/useSnackbarHandler";
import { useAuth } from "../stores/Auth";

const LoginScreen = ({ navigation }) => {
  const { width } = useScreenDimensions();
  const loading = useToggle();
  const phoneNumber = useTextInput();
  const errorSnackbar = useSnackbarHandler();
  const loginWithPhoneNumber = useAuth((state) => state.loginWithPhoneNumber);

  const handleLogin = useCallback(() => {
    loading.start();
    loginWithPhoneNumber(phoneNumber.value)
      .then(() => {
        navigation.navigate("OtpScreen");
      })
      .catch(errorSnackbar.show)
      .finally(loading.stop);
  }, [
    phoneNumber.value,
    navigation,
    loading,
    errorSnackbar,
    loginWithPhoneNumber,
  ]);

  return (
    <>
      <Scaffold>
        <View style={styles.Container}>
          <View style={styles.Header}>
            <Title style={styles.HeaderTitle}>Travel Buddy</Title>
            <Tagline>Your Travel Companion</Tagline>
          </View>
          <View style={styles.IllustrationContainer}>
            <LoginIllustration width={width - 2 * SCREEN_PADDING} />
          </View>
          <View>
            <TextInput
              {...phoneNumber.props}
              disabled={loading.state}
              label="Phone Number"
              style={styles.FormInput}
              textContentType="telephoneNumber"
              keyboardType="phone-pad"
              autoCompleteType="tel"
              maxLength={10}
              returnKeyType="done"
              left={<TextInput.Affix text="+91 " />}
            />
            <Button
              mode="contained"
              disabled={loading.state}
              loading={loading.state}
              onPress={handleLogin}
            >
              SEND OTP
            </Button>
          </View>
        </View>
      </Scaffold>
      <Snackbar
        {...errorSnackbar.props}
        duration={Snackbar.DURATION_SHORT}
        action={{
          label: "Dismiss",
          onPress: errorSnackbar.dismiss,
        }}
      >
        Invalid phone number!
      </Snackbar>
    </>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginScreen;
