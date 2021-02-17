import React from "react";
import { View } from "react-native";
import { Avatar, Divider, List } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import screenStyles from "./styles";
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
      <View style={screenStyles.Section}>
        <View style={styles.ProfileContainer}>
          <Avatar.Image
            size={98}
            style={styles.ProfileImage}
            source={{ uri: "https://picsum.photos/1420" }}
          />
          <ScreenTitle style={styles.UserName}>Riddhi Dholakia</ScreenTitle>
          <View style={styles.ProfileDetails}>
            <MaterialCommunityIcons
              name="phone-outline"
              size={18}
              style={styles.Icon}
            />
            <CardTitle>+91 9029378546</CardTitle>
          </View>
          <Button mode="text" icon="pencil-outline" compact onPress={() => {}}>
            Edit Profile
          </Button>
        </View>
      </View>
      <View style={[screenStyles.Section, styles.ListContainer]}>
        <List.Item
          title="My Bookings"
          onPress={() => {}}
          left={(props) => (
            <List.Icon {...props} icon="briefcase-check-outline" />
          )}
        />
        <Divider style={styles.Divider} />
        <List.Item
          title="My Reviews"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="pencil-box-outline" />}
        />
        <Divider style={styles.Divider} />
        <List.Item
          title="My Blogs"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="card-text-outline" />}
        />
        <Divider style={styles.Divider} />
        <List.Item
          title="Favourites"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="heart-outline" />}
        />
      </View>
    </Scaffold>
  );
};

const styles = {
  Divider: {
    flex: 1,
  },
  ProfileContainer: {
    alignItems: "center",
    marginTop: SCREEN_PADDING,
  },
  ProfileImage: { elevation: 4 },
  UserName: {
    marginTop: 12,
    marginBottom: 4,
  },
  ProfileDetails: { flexDirection: "row", alignItems: "center" },
  Icon: { marginHorizontal: 10 },
  ListContainer: {
    paddingHorizontal: SCREEN_PADDING,
  },
};

export default ProfileScreen;
