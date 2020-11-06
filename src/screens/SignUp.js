import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

import styles from "./styles/authStyles";
import { Scaffold, Button, Title } from "../components";

const SignUpScreen = ({ navigation }) => {
  return (
    <Scaffold>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <Title style={styles.HeaderTitle}>Let us get started</Title>
          {/* <Tagline>Before we start, tell us something about you.</Tagline> */}
        </View>
        <View>
          <TextInput label="Name" style={styles.FormInput} />
          <View style={styles.FormInputContainer}>
            <TextInput
              label="DOB"
              style={[styles.FormInput, styles.FormInputLeft]}
            />
            <TextInput
              label="Gender"
              style={[styles.FormInput, styles.FormInputRight]}
            />
          </View>
          <TextInput label="Prefered Seasons" style={styles.FormInput} />
          <Button
            mode="contained"
            onPress={() => navigation.navigate("OnBoardingScreen")}
          >
            CREATE
          </Button>
        </View>
      </View>
    </Scaffold>
  );
};

SignUpScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUpScreen;
