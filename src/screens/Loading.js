import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { Scaffold } from "../components";
import styles from "./styles";

const LoadingScreen = () => {
  return (
    <Scaffold>
      <View style={styles.ActivityContainer}>
        <ActivityIndicator size="large" />
      </View>
    </Scaffold>
  );
};

export default LoadingScreen;
