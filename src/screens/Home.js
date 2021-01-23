import React from "react";
import { View } from "react-native";
import { Appbar, useTheme } from "react-native-paper";

import styles from "./styles/authStyles";
import { Scaffold, Button, Title } from "../components";
import { useAuth } from "../stores/Auth";

const HomeScreen = () => {
  const logout = useAuth((state) => state.logout);
  const theme = useTheme();
  return (
    <Scaffold
      renderHeader={() => (
        <Appbar.Header
          style={{ backgroundColor: theme.colors.background, elevation: 0 }}
        >
          <Appbar.Content title="Travel Buddy" />
        </Appbar.Header>
      )}
    >
      <View style={styles.Container}>
        <View style={styles.Header}>
          <Title style={styles.HeaderTitle}>Travel Buddy</Title>
        </View>
        <Button mode="contained" onPress={logout}>
          SIGN OUT
        </Button>
      </View>
    </Scaffold>
  );
};

export default HomeScreen;
