import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

import styles, { SCREEN_PADDING } from "./styles/authStyles";
import { Scaffold, Button, Title, Tagline } from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";
import OTPIllustration from "../../assets/illustrations/OTPIllustration.svg";

const OtpScreen = ({ navigation }) => {
  const { width } = useScreenDimensions();

  return (
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
          <TextInput label="Enter OTP" style={styles.FormInput} />
          <View style={styles.FormInputContainer}>
            <Button
              style={styles.FormInputLeft}
              onPress={() => navigation.navigate("SignUpScreen")}
              mode="outlined"
            >
              RESEND
            </Button>
            <Button
              style={styles.FormInputRight}
              mode="contained"
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              CONFIRM
            </Button>
          </View>
        </View>
      </View>
    </Scaffold>
  );
};

OtpScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default OtpScreen;
