import React from "react";
import { View } from "react-native";
import { Avatar, Divider, List } from "react-native-paper";

import screenStyles from "./styles";
import { Appbar, Scaffold, ScreenTitle, CardTitle } from "../components";
import { SCREEN_PADDING } from "../constants";
import { useAuth } from "../stores/Auth";

const ProfileScreen = () => {
  const user = useAuth((state) => state.user);
  const logout = useAuth((state) => state.logout);

  return (
    <Scaffold
      renderHeader={() => (
        <Appbar.Header>
          <Appbar.Content title="Profile" />
          <Appbar.Action icon="pencil-outline" onPress={() => {}} />
          <Appbar.Action icon="exit-to-app" onPress={logout} />
        </Appbar.Header>
      )}
    >
      <View style={styles.ProfileContainer}>
        <Avatar.Image
          size={108}
          style={styles.ProfileImage}
          source={{ uri: "https://picsum.photos/1420" }}
        />
        <View style={styles.ProfileDetails}>
          <ScreenTitle>{user.name}</ScreenTitle>
          <CardTitle>{user.phoneNumber}</CardTitle>
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
        <Divider />
        <List.Item
          title="My Reviews"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="pencil-box-outline" />}
        />
        <Divider />
        <List.Item
          title="My Blogs"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="card-text-outline" />}
        />
        <Divider />
        <List.Item
          title="My Favourites"
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
    margin: SCREEN_PADDING,
  },
  ProfileDetails: {
    marginVertical: SCREEN_PADDING,
    alignItems: "center",
    justifyContent: "center",
  },
  ProfileImage: {
    alignSelf: "center",
  },
  ListContainer: {
    paddingHorizontal: SCREEN_PADDING,
  },
};

export default ProfileScreen;
