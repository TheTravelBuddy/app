import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { Scaffold } from "../components";

const LoadingScreen = () => {
  return (
    <Scaffold>
      <View style={styles.Container}>
        <ActivityIndicator size="large" />
      </View>
    </Scaffold>
  );
};

const styles = {
  Container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
};

export default LoadingScreen;
