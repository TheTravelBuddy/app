import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import styles, { SCREEN_PADDING } from "./styles/authStyles";
import { Scaffold, Button, Title, Tagline } from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";
import LoginIllustration from "../../assets/illustrations/LoginIllustration.svg";

const Login = ({ navigation }) => {
  const { width } = useScreenDimensions();

  return (
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
          <Button
            mode="contained"
            onPress={() => navigation.navigate("OnBoardingScreen")}
          >
            SEND OTP
          </Button>
        </View>
      </View>
    </Scaffold>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
