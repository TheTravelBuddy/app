import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { TextInput, Snackbar } from "react-native-paper";

import styles, { SCREEN_PADDING } from "./styles/authStyles";
import { Scaffold, Button, Title, Tagline } from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";
import OTPIllustration from "../../assets/illustrations/OTPIllustration.svg";
import useTextInput from "../hooks/useTextInput";
import useToggle from "../hooks/useToggle";
import useSnackbarHandler from "../hooks/useSnackbarHandler";
import { useAuth } from "../stores/Auth";

const OtpScreen = ({ route }) => {
  const { width } = useScreenDimensions();
  const loading = useToggle();
  const errorSnackbar = useSnackbarHandler();
  const resendSnackbar = useSnackbarHandler();
  const otp = useTextInput();
  const { verifyOtp, resendOtp } = useAuth();

  const handleOtp = useCallback(() => {
    loading.start();
    verifyOtp(otp.value)
      .then(() => console.log("Signed In"))
      .catch((err) => {
        console.log(err);
        errorSnackbar.show();
      })
      .finally(loading.stop);
  }, [otp, verifyOtp, loading, errorSnackbar]);

  const handleResend = useCallback(() => {
    resendOtp().then(resendSnackbar.show).catch(errorSnackbar.show);
  }, [resendOtp, errorSnackbar, resendSnackbar]);

  return (
    <>
      <Scaffold>
        <View style={styles.Container}>
          <View style={styles.Header}>
            <Title style={styles.HeaderTitle}>Travel Buddy</Title>
            <Tagline>Your Travel Companion</Tagline>
          </View>
          <View style={styles.IllustrationContainer}>
            <OTPIllustration width={width - 2 * SCREEN_PADDING} />
          </View>
          <View>
            <TextInput
              {...otp.props}
              disabled={loading.state}
              label="Enter OTP"
              style={styles.FormInput}
              textContentType="oneTimeCode"
              keyboardType="number-pad"
              autoCompleteType="off"
              maxLength={6}
              returnKeyType="done"
            />
            <View style={styles.FormInputContainer}>
              <Button
                disabled={loading.state}
                style={styles.FormInputLeft}
                onPress={handleResend}
                mode="outlined"
              >
                RESEND
              </Button>
              <Button
                disabled={loading.state}
                loading={loading.state}
                style={styles.FormInputRight}
                mode="contained"
                onPress={handleOtp}
              >
                CONFIRM
              </Button>
            </View>
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
        Invalid OTP!
      </Snackbar>
      <Snackbar
        {...resendSnackbar.props}
        duration={Snackbar.DURATION_SHORT}
        action={{
          label: "Dismiss",
          onPress: resendSnackbar.dismiss,
        }}
      >
        OTP Resent!
      </Snackbar>
    </>
  );
};

OtpScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default OtpScreen;
