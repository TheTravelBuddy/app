import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";

export const HEADER_HEIGHT = 56;

const ScreenWrapper = ({
  children,
  statusBarColor,
  renderHeader,
  renderFooter,
  style = {},
}) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={StyleSheet.absoluteFill}>
      <StatusBar
        backgroundColor={statusBarColor || theme.colors.background}
        animated={true}
        barStyle="dark-content"
      />
      {renderHeader && renderHeader()}
      <ScrollView
        overScrollMode="never"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.ContentContainer,
          { backgroundColor: theme.colors.background },
          style,
        ]}
      >
        {children}
      </ScrollView>
      {renderFooter && renderFooter()}
    </SafeAreaView>
  );
};

const styles = {
  ContentContainer: {
    flexGrow: 1,
  },
};

export default ScreenWrapper;
