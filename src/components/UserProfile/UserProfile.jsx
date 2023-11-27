import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ThemeContext } from "../../../utils/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { fetchUser } from "../../../utils/api";
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from "../Settings/SettingsScreen";
const UserProfileStack = createStackNavigator();

const UserProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [userAvatarUrl, setUserAvatarUrl] = useState('https://th.bing.com/th/id/OIP.KGdLPsiqGjKqCYuhzhmmWgHaEP?rs=1&pid=ImgDetMain'); 
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const username = route.params?.username;
    if (username) {
      fetchUser(username).then((userData) => {
        setUser(userData);
        setUserAvatarUrl(userData.profile_image.small);
        console.log(userData); 
      });
    } else {

    }
  }, [route.params?.username]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: theme.colors.text,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    button: {
      position: "absolute",
      top: 10,
      right: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Ionicons
        name="ios-settings"
        size={24}
        color={theme.colors.text}
        style={styles.button}
        onPress={() => navigation.navigate("SettingsScreen")}
      />
      <Image source={{ uri: userAvatarUrl }} style={{ width: 100, height: 100 }} />
      {user && (
        <>
          <Text style={styles.text}>{user.name}</Text>
          <Text style={styles.text}>{user.bio}</Text>
        </>
      )}
    </View>
  );
};

const UserProfile = () => {
  return (
    <UserProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <UserProfileStack.Screen name="UserProfileScreen" component={UserProfileScreen} />
      <UserProfileStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </UserProfileStack.Navigator>
  );
};

export default UserProfile;


