import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { ThemeContext } from "../../../utils/ThemeProvider";
import axios from 'axios';
import { createStackNavigator } from "@react-navigation/stack";

const SignUpStack = createStackNavigator();

function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { theme } = useContext(ThemeContext);

  const handleSignUp = () => {
    axios.post('https://api.com/signup', {
      username: username,
      email: email,
      password: password
    })
    .then(function (response) {
      console.log(response);
      navigation.navigate('LoginScreen');
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
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
        label="Email"
        value={email}
        onChangeText={setEmail}
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
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Already have an account? Login" type="clear" onPress={handleLogin} />
    </View>
  );
}

const SignUp = () => {
  return (
    <SignUpStack.Navigator screenOptions={{ headerShown: false }}>
      <SignUpStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </SignUpStack.Navigator>
  );
};

export default SignUp;