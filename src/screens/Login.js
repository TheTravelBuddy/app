import React from "react";
import PropTypes from "prop-types";
import { Title } from "react-native-paper";
import { View } from "react-native";

import { Scaffold, Button } from "../components";

const Login = ({ navigation }) => {
  return (
    <Scaffold>
      <Title>Travel Buddy</Title>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          margin: 16,
          justifyContent: "center",
        }}
      >
        <Button
          mode="contained"
          onPress={() => navigation.navigate("OnBoardingScreen")}
        >
          SEND OTP
        </Button>
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
