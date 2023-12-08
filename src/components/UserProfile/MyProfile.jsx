import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { ThemeContext } from "../../../utils/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { fetchMe, fetchUser } from "../../../utils/api";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../Settings/SettingsScreen";
import UserProfileHeader from "./UserProfileHeader";
import UserPhotos from "./UserPhotos";

const MyProfileStack = createStackNavigator();

const MyProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [userAvatarUrl, setUserAvatarUrl] = useState(null);
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  useEffect(() => {
    fetchMe()
      .then(data => {
        setUser(data);
        setUserAvatarUrl(data.profile_image.large);
      })
      .catch(error => console.error(error));
  }, []);

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
          <UserProfileHeader user={user} userAvatarUrl={userAvatarUrl} isCurrentUser={true} />
          <UserPhotos username={user.username} />
        </>
      )}
    </View>
  );
};

const MyProfile = () => {
  return (
    <MyProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <MyProfileStack.Screen
        name="MyProfileScreen"
        component={MyProfileScreen}
      />
      <MyProfileStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </MyProfileStack.Navigator>
  );
};

export default MyProfile;