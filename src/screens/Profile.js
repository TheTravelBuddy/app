import React from "react";
import { View } from "react-native";
import { Avatar, Divider, List } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./styles";
import {
  Appbar,
  Scaffold,
  Button,
  ScreenTitle,
  CardTitle,
} from "../components";
import { SCREEN_PADDING } from "../constants";

const ProfileScreen = () => {
  return (
    <Scaffold
      renderHeader={() => (
        <Appbar.Header>
          <Appbar.Content title="Profile" />
          <Appbar.Action icon="exit-to-app" onPress={() => {}} />
        </Appbar.Header>
      )}
    >
      <View style={styles.Section}>
        <View
          style={{
            alignItems: "center",
            marginTop: SCREEN_PADDING,
          }}
        >
          <Avatar.Image
            size={98}
            style={{ elevation: 4 }}
            source={{ uri: "https://picsum.photos/1420" }}
          />
          <ScreenTitle style={{ marginTop: 12, marginBottom: 4 }}>
            Riddhi Dholakia
          </ScreenTitle>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="phone-outline"
              size={18}
              style={{ marginHorizontal: 10 }}
            />
            <CardTitle>+91 6969420420</CardTitle>
          </View>
          <Button mode="text" icon="pencil-outline" compact onPress={() => {}}>
            Edit Profile
          </Button>
        </View>
      </View>
      <View style={[styles.Section, { paddingHorizontal: SCREEN_PADDING }]}>
        <List.Item
          title="My Bookings"
          onPress={() => {}}
          left={(props) => (
            <List.Icon {...props} icon="briefcase-check-outline" />
          )}
        />
        <Divider style={{ flex: 1 }} />
        <List.Item
          title="My Reviews"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="pencil-box-outline" />}
        />
        <Divider style={{ flex: 1 }} />
        <List.Item
          title="My Blogs"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="card-text-outline" />}
        />
        <Divider style={{ flex: 1 }} />
        <List.Item
          title="Favourites"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="heart-outline" />}
        />
      </View>
    </Scaffold>
  );
};

export default ProfileScreen;
