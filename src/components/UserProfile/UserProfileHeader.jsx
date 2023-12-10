import React, { useContext } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { ThemeContext } from "../../../utils/ThemeProvider";
import { getStyles } from "../UserProfile/styles";
import { useNavigation } from "@react-navigation/native";

const UserProfileHeader = ({ user, userAvatarUrl, isCurrentUser }) => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const styles = getStyles(theme);

  return (
    <View style={styles.userInfo}>
      <Text style={styles.username}>{user.username}</Text>
      <View style={styles.profileInfo}>
        <Image source={{ uri: userAvatarUrl }} style={styles.image} />
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.username}>{user.total_photos}</Text>
            <Text style={styles.realName}>Posts</Text>
          </View>
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
      <View style={styles.buttonGroup}>
        {isCurrentUser ? (
          <View style={styles.Editbutton}>
            <Button
              title="Edit Profile"
              buttonStyle={{ width: "100%" }}
              onPress={() => navigation.navigate("EditProfileScreen")}
            />
          </View>
        ) : (
          <>
            <Button title="Follow" buttonStyle={styles.button} type="outline" />
            <Button title="Message" buttonStyle={styles.button} />
          </>
        )}
      </View>
      <Text style={styles.bio}>{user.bio}</Text>
    </View>
  );
};

export default UserProfileHeader;
