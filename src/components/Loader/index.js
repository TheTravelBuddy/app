import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const Loader = ({
  renderIndicator = false,
  indicatorProps,
  style,
  loaded,
  children,
}) =>
  loaded ? (
    children()
  ) : (
    <View style={[styles.Container, style]}>
      {renderIndicator ? (
        renderIndicator()
      ) : (
        <ActivityIndicator size="large" {...indicatorProps} />
      )}
    </View>
  );

const styles = {
  Container: {
    flex: 1,
    justifyContent: "center",
  },
};

export default Loader;
