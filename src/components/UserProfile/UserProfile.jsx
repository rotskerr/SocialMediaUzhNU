// UserProfile.jsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../Settings/SettingsScreen";
import UserProfileScreen from "./UserProfileScreen"; // Import UserProfileScreen here

const UserProfileStack = createStackNavigator();

const UserProfile = () => {
  return (
    <UserProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <UserProfileStack.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
      />
      <UserProfileStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </UserProfileStack.Navigator>
  );
};

export default UserProfile;