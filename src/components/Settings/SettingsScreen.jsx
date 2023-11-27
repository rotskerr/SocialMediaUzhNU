import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from "../../../utils/ThemeProvider";
import SignUp from "../register/SignUp";

const SettingsStack = createStackNavigator();

const Settings = () => {
  const navigation = useNavigation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    title: {
      fontSize: 20,
      color: theme.colors.text,
    },
    button: {
      marginTop: 10,
    },
  });

  const logOut = async () => {
    await AsyncStorage.removeItem('user');
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button
        title="Log Out"
        onPress={logOut}
        color={theme.colors.primary}
        style={styles.button}
      />
      <Button
        title="Toggle Theme"
        onPress={toggleTheme}
        color={theme.colors.primary}
        style={styles.button}
      />
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen name="SignUp" component={SignUp} />
    </SettingsStack.Navigator>
  );
};

export default SettingsScreen;