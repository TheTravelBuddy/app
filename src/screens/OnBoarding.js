import React from "react";
import PropTypes from "prop-types";
import { Title } from "react-native-paper";
import { StyleSheet } from "react-native";

import { Scaffold, Button } from "../components";

const OnBoardingScreen = ({ navigation }) => {
  return (
    <Scaffold>
      <Title>Travel Buddy</Title>
      <Button mode="contained">LOGIN!</Button>
    </Scaffold>
  );
};

OnBoardingScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default OnBoardingScreen;
