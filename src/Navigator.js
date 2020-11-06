import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnBoardingScreen from "./screens/OnBoarding";
import Login from "./screens/Login";

const AuthStack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  </NavigationContainer>
);

export default Navigator;
