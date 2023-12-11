import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MyTabs from "../src/components/HomePage/MyTabs";
import UserProfileScreen from "../src/components/UserProfile/UserProfileScreen";
import SettingsScreen from "../src/components/Settings/SettingsScreen";
import Login from "../src/components/login/Login";
import SignUp from "../src/components/register/SignUp";
import SearchScreen from "../src/components/SearchScreen/SearchScreen";
import EditProfileScreen from "../src/components/EditProfileScreen/EditProfileScreen";
import HomePage from "../src/components/HomePage/HomePage";
import LoadingScreen from "../src/components/SplashScreen/LoadingScreen"; // import your LoadingScreen
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import UserPhotosView from "../src/components/ImageCard/UserPhotosView";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoadingScreen"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS, // This is where you define the transition animation
        }}
      >
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="HomePageScreen" component={HomePage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="UserPhotosView" component={UserPhotosView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
