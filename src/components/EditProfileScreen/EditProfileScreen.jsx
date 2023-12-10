// EditProfileScreen.jsx
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../utils/ThemeProvider';

const EditProfileScreen = () => {
  const { theme } = useContext(ThemeContext);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: theme.colors.background,
    },
    input: {
      height: 40,
      borderColor: theme.colors.text,
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      color: theme.colors.text,
    },
    button: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.background,
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="Location"
      />
      <Button title="Save Changes"  color={styles.button.backgroundColor} />
    </View>
  );
};

export default EditProfileScreen;
