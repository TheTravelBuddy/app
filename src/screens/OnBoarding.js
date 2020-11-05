import React from "react";
import PropTypes from "prop-types";
import { Title } from "react-native-paper";

import { Scaffold } from "../components";

const OnBoardingScreen = ({ navigation }) => {
  return (
    <Scaffold>
      <Title>Travel Buddy</Title>
    </Scaffold>
  );
};

OnBoardingScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default OnBoardingScreen;
