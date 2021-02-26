import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useTheme } from "react-native-paper";

import OnBoardingScreen from "./screens/OnBoarding";
import LoginScreen from "./screens/Login";
import OtpScreen from "./screens/Otp";
import SignUpScreen from "./screens/SignUp";

import HomeScreen from "./screens/Home";
import BookingScreen from "./screens/Booking";
import ExploreScreen from "./screens/Explore";
import CommunityScreen from "./screens/Community";
import ProfileScreen from "./screens/Profile";
import BookingSearchScreen from "./screens/BookingSearch";
import BookingFavoritesScreen from "./screens/BookingFavorites";
import HotelDetailsScreen from "./screens/HotelDetails";
import BlogScreen from "./screens/Blog";
import AttractionDetailsScreen from "./screens/AttractionDetails";
import BusinessDetailsScreen from "./screens/BusinessDetails";
import PackageDetailsScreen from "./screens/PackageDetails";
import CityDetailsScreen from "./screens/CityDetails";
import BlogTopicScreen from "./screens/BlogTopic";
import EditProfileScreen from "./screens/EditProfile";
import ReviewsScreen from "./screens/Reviews";
import CommentsScreen from "./screens/Comments";

import { useAuth, authStates } from "./stores/Auth";
import LoadingScreen from "./screens/Loading";

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();
const HomeTab = createMaterialBottomTabNavigator();

const HomeTabNavigator = () => {
  const theme = useTheme();

  return (
    <HomeTab.Navigator
      labeled
      shifting={false}
      initialRouteName="HomeScreen"
      activeColor={theme.colors.primary}
      barStyle={{ backgroundColor: theme.colors.surface }}
    >
      <HomeTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="BookingStackNavigator"
        component={BookingScreen}
        options={{
          tabBarLabel: "Booking",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="briefcase-check-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="compass-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="CommunityScreen"
        component={CommunityScreen}
        options={{
          tabBarLabel: "Community",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="forum-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
};

const Navigator = () => {
  const initAuthHandler = useAuth((state) => state.initAuthHandler);
  const authState = useAuth((state) => state.authState);

  useEffect(initAuthHandler, [initAuthHandler]);

  return (
    <NavigationContainer>
      {authState === authStates.NO_AUTH ? (
        <AuthStack.Navigator headerMode="none">
          <AuthStack.Screen
            name="OnBoardingScreen"
            component={OnBoardingScreen}
          />
          <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
          <AuthStack.Screen name="OtpScreen" component={OtpScreen} />
        </AuthStack.Navigator>
      ) : authState === authStates.UNREGISTERED ? (
        <SignUpScreen />
      ) : authState === authStates.LOGGED_IN ? (
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen
            name="HomeTabNavigator"
            component={HomeTabNavigator}
          />
          <AppStack.Screen
            name="BookingSearchScreen"
            component={BookingSearchScreen}
          />
          <AppStack.Screen
            name="BookingFavoritesScreen"
            component={BookingFavoritesScreen}
          />
          <AppStack.Screen
            name="HotelDetailsScreen"
            component={HotelDetailsScreen}
          />
          <AppStack.Screen name="BlogScreen" component={BlogScreen} />
          <AppStack.Screen
            name="AttractionDetailsScreen"
            component={AttractionDetailsScreen}
          />
          <AppStack.Screen
            name="BusinessDetailsScreen"
            component={BusinessDetailsScreen}
          />
          <AppStack.Screen
            name="PackageDetailsScreen"
            component={PackageDetailsScreen}
          />
          <AppStack.Screen
            name="CityDetailsScreen"
            component={CityDetailsScreen}
          />
          <AppStack.Screen
            name="EditProfileScreen"
            component={EditProfileScreen}
          />
          <AppStack.Screen name="BlogTopicScreen" component={BlogTopicScreen} />
          <AppStack.Screen name="ReviewsScreen" component={ReviewsScreen} />
          <AppStack.Screen name="CommentsScreen" component={CommentsScreen} />
        </AppStack.Navigator>
      ) : (
        <LoadingScreen />
      )}
    </NavigationContainer>
  );
};

export default Navigator;
