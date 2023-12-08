// UserProfileScreen.jsx
import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { ThemeContext } from "../../../utils/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { fetchUser } from "../../../utils/api";
import UserProfileHeader from "./UserProfileHeader";
import UserPhotos from "./UserPhotos";

const UserProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [userAvatarUrl, setUserAvatarUrl] = useState(null);
  const [username, setUsername] = useState(null);
  const [isCurrentUser, setIsCurrentUser] = useState(false); // Add this line
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.params?.username) {
      setUsername(route.params.username);
    }
    if (route.params?.isCurrentUser !== undefined) {
      setIsCurrentUser(route.params.isCurrentUser);
    }
  }, [route.params?.username, route.params?.isCurrentUser]);

  useEffect(() => {
    if (username) {
      fetchUser(username).then((userData) => {
        setUser(userData);
        setUserAvatarUrl(userData.profile_image.large);
      });
    }
  }, [username]);

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
      {isCurrentUser ? (
        <Ionicons
          name="ios-settings"
          size={24}
          color={theme.colors.text}
          style={styles.settingsButton}
          onPress={() => navigation.navigate("SettingsScreen")}
        />
      ) : null}
      {user && (
        <>
          <UserProfileHeader user={user} userAvatarUrl={userAvatarUrl} />
          <UserPhotos username={user.username} />
        </>
      )}
    </View>
  );
};

export default UserProfileScreen;