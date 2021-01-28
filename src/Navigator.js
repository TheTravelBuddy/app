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
import { useAuth, authStates } from "./stores/Auth";
import LoadingScreen from "./screens/Loading";

const AuthStack = createStackNavigator();
const MainTab = createMaterialBottomTabNavigator();

const Navigator = () => {
  const theme = useTheme();
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
        <MainTab.Navigator
          initialRouteName="HomeScreen"
          activeColor="#5C3DA5"
          shifting={false}
          labeled={true}
          barStyle={{ backgroundColor: theme.colors.surface }}
        >
          <MainTab.Screen
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
          <MainTab.Screen
            name="BookingScreen"
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
          <MainTab.Screen
            name="ExploreScreen"
            component={HomeScreen}
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
          <MainTab.Screen
            name="CommunityScreen"
            component={HomeScreen}
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
          <MainTab.Screen
            name="ProfileScreen"
            component={HomeScreen}
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
        </MainTab.Navigator>
      ) : (
        <LoadingScreen />
      )}
    </NavigationContainer>
  );
};

export default Navigator;
