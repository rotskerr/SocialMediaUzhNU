import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MyTabs from "../src/components/HomePage/MyTabs";
import UserProfileScreen from "../src/components/UserProfile/UserProfileScreen";
import SettingsScreen from "../src/components/Settings/SettingsScreen";
import Login from "../src/components/login/Login";
import SignUp from "../src/components/register/SignUp";
import SearchScreen from "../src/components/SearchScreen/SearchScreen";
import EditProfileScreen from "../src/components/EditProfileScreen/EditProfileScreen";
import HomePage from "../src/components/HomePage/HomePage";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="HomePageScreen" component={HomePage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;