import React, { useContext, useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../../../utils/ThemeProvider";
import { useNavigation } from "@react-navigation/native";

const ImageCard = ({ image }) => {
  const { theme } = useContext(ThemeContext);
  const aspectRatio =
    image.width && image.height ? image.width / image.height : 1;

  const [userAvatarUrl, setUserAvatarUrl] = useState(
    image.user.profile_image.small
  );

  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("UserProfileScreen", { username: image.user.username })
        }
      >
        <View style={styles.userContainer}>
          <Image source={{ uri: userAvatarUrl }} style={styles.userAvatar} />
          <Text style={[styles.text, { color: theme.colors.text }]}>
            {image.user.name}
          </Text>
        </View>
      </TouchableOpacity>

      <Image
        source={{ uri: image.urls.regular }}
        style={[styles.image, { aspectRatio }]}
      />
      <View style={styles.infoContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Ionicons
              name="heart-outline"
              size={24}
              color={theme.colors.text}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="chatbubble-outline"
              size={24}
              color={theme.colors.text}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="send-outline" size={24} color={theme.colors.text} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="bookmark-outline"
              size={24}
              color={theme.colors.text}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.likesCommentsContainer}>
          <Text style={[styles.text, { color: theme.colors.text }]}>
            {image.likes} likes
          </Text>
          <Text style={[styles.text, { color: theme.colors.text }]}>
            {image.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingTop: 10,
    marginBottom: 10,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: null,
  },
  infoContainer: {
    padding: 10,
  },
  text: {
    textAlign: "left",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  likesCommentsContainer: {
    alignItems: "flex-start",
  },
});

export default ImageCard;
