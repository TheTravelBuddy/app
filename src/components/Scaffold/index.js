import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";

import Appbar from "../Appbar";

const Scaffold = ({
  children,
  statusBarColor,
  header,
  renderHeader,
  renderFooter,
  style,
}) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={StyleSheet.absoluteFill}>
      <StatusBar
        animated
        backgroundColor={statusBarColor || theme.colors.background}
        barStyle="dark-content"
      />
      {renderHeader && renderHeader()}
      <ScrollView
        overScrollMode="never"
        keyboardShouldPersistTaps="handled"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.ContentContainer,
          { backgroundColor: theme.colors.background },
          style,
        ]}
      >
        {!!header && (
          <Appbar.Header>
            {header.backAction && (
              <Appbar.BackAction onPress={header.backAction} />
            )}
            <Appbar.Content title={header.title} />
            {header.actions &&
              header.actions.map((props) => (
                <Appbar.Action key={props.icon} {...props} />
              ))}
          </Appbar.Header>
        )}
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

export default Scaffold;
