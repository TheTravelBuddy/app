import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnBoardingScreen from "./screens/OnBoarding";
import LoginScreen from "./screens/Login";
import OtpScreen from "./screens/Otp";
import SignUpScreen from "./screens/SignUp";

const AuthStack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="OtpScreen" component={OtpScreen} />
      <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </AuthStack.Navigator>
  </NavigationContainer>
);

export default Navigator;
