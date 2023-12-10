import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { ThemeContext } from "../../../utils/ThemeProvider";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from "@react-navigation/stack";

const LoginStack = createStackNavigator();

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useContext(ThemeContext);

  const handleLogin = () => {
    axios.post('https://api/login', {
      username: username,
      password: password
    })
    .then(async function (response) {
      console.log(response);
      try {
        await AsyncStorage.setItem('user', JSON.stringify(response.data));
        navigation.navigate('HomePage');
      } catch (error) {
        console.log(error);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const handleRegister = () => {
    navigation.navigate('SignUpScreen');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: theme.colors.background,
    },
    input: {
      marginBottom: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Input
        label="Username"
        value={username}
        onChangeText={setUsername}
        containerStyle={styles.input}
        labelStyle={{ color: theme.colors.text }}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        containerStyle={styles.input}
        labelStyle={{ color: theme.colors.text }}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="SignUp" type="clear" onPress={handleRegister} />
    </View>
  );
}

const Login = () => {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
    </LoginStack.Navigator>
  );
};

export default Login;