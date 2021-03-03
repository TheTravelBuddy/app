import React, { useMemo } from "react";
import { View } from "react-native";
import { Avatar, Divider, List } from "react-native-paper";

import screenStyles from "./styles";
import { Scaffold, ScreenTitle, CardTitle } from "../components";
import { SCREEN_PADDING } from "../constants";
import { useAuth } from "../stores/Auth";

const ProfileScreen = ({ navigation: { navigate } }) => {
  const user = useAuth((state) => state.user);
  const logout = useAuth((state) => state.logout);
  return (
    <Scaffold
      header={useMemo(
        () => ({
          title: "Profile",
          actions: [
            {
              icon: "pencil-outline",
              onPress: () => navigate("EditProfileScreen"),
            },
            {
              icon: "exit-to-app",
              onPress: logout,
            },
          ],
        }),
        [logout, navigate]
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
          onPress={() => {
            navigate("MyBookingsScreen");
          }}
          left={(props) => (
            <List.Icon {...props} icon="briefcase-check-outline" />
          )}
        />
        <Divider />
        <List.Item
          title="My Reviews"
          onPress={() => {
            navigate("MyReviewsScreen");
          }}
          left={(props) => <List.Icon {...props} icon="pencil-box-outline" />}
        />
        <Divider />
        <List.Item
          title="My Blogs"
          onPress={() => {
            navigate("MyBlogsScreen");
          }}
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
