import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeContext } from "../../../utils/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import HomePage from "../HomePage/HomePage";
import UserProfile from "../UserProfile/UserProfile";
import SearchScreen from "../SearchScreen/SearchScreen";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      headerMode="none"
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.text,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarActiveBackgroundColor: theme.colors.background,
        tabBarInactiveBackgroundColor: theme.colors.background,
        tabBarStyle: [{ display: "flex" }],
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          headerShown: false,

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
