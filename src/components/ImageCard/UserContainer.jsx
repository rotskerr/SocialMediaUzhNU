import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
 
 
 const UserContainer = ({ user, userAvatarUrl, styles, navigation }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("UserProfileScreen", { username: user.username, isCurrentUser: false })
      }
    >
      <View style={styles.userContainer}>
        <Image source={{ uri: userAvatarUrl }} style={styles.userAvatar} />
        <Text style={styles.text}>{user.name}</Text>
      </View>
    </TouchableOpacity>
  );

  export default UserContainer;