import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import Signup from "../screens/Signup";


const Auth = createStackNavigator();
const AuthNavigator = () => (
  <Auth.Navigator>
    <Auth.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    ></Auth.Screen>
    <Auth.Screen name="Signup" options={{ headerShown: false }} component={Signup}></Auth.Screen>
  </Auth.Navigator>
);

export default AuthNavigator;
