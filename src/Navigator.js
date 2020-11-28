import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnBoardingScreen from "./screens/OnBoarding";
import LoginScreen from "./screens/Login";
import OtpScreen from "./screens/Otp";
import SignUpScreen from "./screens/SignUp";

import HomeScreen from "./screens/Home";
import { useAuth, authStates } from "./stores/Auth";
import LoadingScreen from "./screens/Loading";

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

const Navigator = () => {
  const { authState } = useAuth();

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
          <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
        </AuthStack.Navigator>
      ) : authState === authStates.LOGGED_IN ? (
        <MainStack.Navigator headerMode="none">
          <MainStack.Screen name="HomeScreen" component={HomeScreen} />
        </MainStack.Navigator>
      ) : (
        <LoadingScreen />
      )}
    </NavigationContainer>
  );
};

export default Navigator;
