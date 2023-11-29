import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ThemeContext } from "../../../utils/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { fetchUser } from "../../../utils/api";
import { getStyles } from "../../../utils/styles";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../Settings/SettingsScreen";
const UserProfileStack = createStackNavigator();

const UserProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [userAvatarUrl, setUserAvatarUrl] = useState(null);
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const route = useRoute();
  const styles = getStyles(theme);

  useEffect(() => {
    const username = route.params?.username;
    if (username) {
      fetchUser(username).then((userData) => {
        setUser(userData);
        setUserAvatarUrl(userData.profile_image.large);
      });
    } else {
    }
  }, [route.params?.username]);

  return (
    <View style={styles.container}>
      <Ionicons
        name="ios-settings"
        size={24}
        color={theme.colors.text}
        style={styles.button}
        onPress={() => navigation.navigate("SettingsScreen")}
      />
      {user && (
        <View style={styles.userInfo}>
          <Text style={styles.username}>{user.username}</Text>
          <View style={styles.profileInfo}>
            <Image source={{ uri: userAvatarUrl }} style={styles.image} />
            <View style={styles.stats}>
              <View style={styles.stat}>
                <Text style={styles.username}>{user.followers_count}</Text>
                <Text style={styles.realName}>Followers</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.username}>{user.following_count}</Text>
                <Text style={styles.realName}>Following</Text>
              </View>
            </View>
          </View>
        </View>
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
