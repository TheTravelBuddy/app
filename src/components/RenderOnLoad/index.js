import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import styles from "../../screens/styles";

const RenderOnLoad = ({ loading, children }) => {
  return loading ? (
    <View style={styles.ActivityContainer}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    children()
  );
};

export default RenderOnLoad;
