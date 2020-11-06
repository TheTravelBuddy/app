import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import styles, { SCREEN_PADDING } from "./styles/authStyles";
import { Scaffold, Button, Title, Tagline } from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";
import OnBoardingIllustration from "../../assets/illustrations/OnBoardingIllustration.svg";

const OnBoardingScreen = ({ navigation }) => {
  const { width } = useScreenDimensions();

  return (
    <Scaffold>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <Title style={styles.HeaderTitle}>Travel Buddy</Title>
          <Tagline>Your Travel Companion</Tagline>
        </View>
        <View style={styles.IllustrationContainer}>
          <OnBoardingIllustration width={width - 2 * SCREEN_PADDING} />
        </View>
        <View>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("LoginScreen")}
          >
            LOGIN
          </Button>
        </View>
      </View>
    </Scaffold>
  );
};

OnBoardingScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default OnBoardingScreen;
