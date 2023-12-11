import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeContext } from "../../../utils/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import HomePage from "../HomePage/HomePage";
import SearchScreen from "../SearchScreen/SearchScreen";
import { TouchableOpacity } from "react-native";
import MyProfile from "../UserProfile/MyProfile";
import { fetchMe } from "../../../utils/api";
import HeaderScreen from "../HeaderScreen/HeaderScreen";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <HeaderScreen />
      <Tab.Navigator
        headerMode="none"
        initialRouteName="HomePage"
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
          name="HomePage"
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
          component={MyProfile}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => {
                  fetchMe();
                  props.onPress();
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default MyTabs;
