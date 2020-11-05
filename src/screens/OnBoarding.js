import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native-paper";

import { Scaffold } from "../components";

const OnBoardingScreen = ({ navigation }) => {
  return (
    <Scaffold>
      <Text>Travel Buddy</Text>
    </Scaffold>
  );
};

OnBoardingScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default OnBoardingScreen;
