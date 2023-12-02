import React, { useContext, useState } from "react";
import { View, Image, Text } from "react-native";
import { ThemeContext } from "../../../utils/ThemeProvider";
import { useNavigation } from "@react-navigation/native";
import { getStyles } from "./styles";
import UserContainer from "./UserContainer";
import IconContainer from "./IconContainer";

const ImageCard = ({ image }) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);
  const aspectRatio =
    image.width && image.height ? image.width / image.height : 1;

  const [userAvatarUrl] = useState(image.user.profile_image.small);

  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <UserContainer
        user={image.user}
        userAvatarUrl={userAvatarUrl}
        styles={styles}
        navigation={navigation}
      />
      <Image
        source={{ uri: image.urls.regular }}
        style={[styles.image, { aspectRatio }]}
      />
      <View style={styles.infoContainer}>
        <IconContainer theme={theme} styles={styles} />
        <View style={styles.likesCommentsContainer}>
          <Text style={styles.text}>{image.likes} likes</Text>
          <Text style={styles.text}>{image.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default ImageCard;
