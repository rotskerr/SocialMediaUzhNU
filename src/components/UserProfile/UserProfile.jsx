import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { ThemeContext } from "../../../utils/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { fetchUser } from "../../../utils/api";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../Settings/SettingsScreen";
import UserProfileHeader from "./UserProfileHeader";
import UserPhotos from "./UserPhotos";

const UserProfileStack = createStackNavigator();

const UserProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [userAvatarUrl, setUserAvatarUrl] = useState(null);
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const username = route.params?.username;
    if (username) {
      fetchUser(username).then((userData) => {
        setUser(userData);
        setUserAvatarUrl(userData.profile_image.large);
      });
    }
  }, [route.params?.username]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    settingsButton: {
      position: "absolute",
      top: 15,
      right: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Ionicons
        name="ios-settings"
        size={24}
        color={theme.colors.text}
        style={styles.settingsButton}
        onPress={() => navigation.navigate("SettingsScreen")}
      />
      {user && (
        <>
          <UserProfileHeader user={user} userAvatarUrl={userAvatarUrl} />
          <UserPhotos username={user.username} />
        </>
      )}
    </View>
  );
};

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