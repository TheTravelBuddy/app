import React from "react";
import { View } from "react-native";

import styles from "./styles/authStyles";
import { Scaffold, Button, Title } from "../components";
import { useAuth } from "../stores/Auth";

const HomeScreen = () => {
  const logout = useAuth((state) => state.logout);

  return (
    <Scaffold>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <Title style={styles.HeaderTitle}>Home!</Title>
        </View>
        <Button mode="contained" onPress={logout}>
          SIGN OUT
        </Button>
      </View>
    </Scaffold>
  );
};

export default HomeScreen;
