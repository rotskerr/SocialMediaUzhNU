import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  FlatList,
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fetchUserPhotos } from "../../../utils/api";
import { ThemeContext } from "../../../utils/ThemeProvider";

const UserPhotos = ({ username }) => {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const styles = StyleSheet.create({
    text: {
      color: theme.colors.text,
    },
  });

  const [userPhotos, setUserPhotos] = useState([]);

  useEffect(() => {
    const getUserPhotos = async () => {
      const photos = await fetchUserPhotos(username);
      setUserPhotos(photos);
    };

    getUserPhotos();
  }, [username]);

  const imageWidth = Dimensions.get("window").width / 3.4;

  if (userPhotos.length === 0) {
    return (
      <View style={{ flex: 1, alignItems: "start" }}>
        <Text style={styles.text}>
          Сись чоловік (а може і не чоловік) рот кохав сюда шось викладувати)
        </Text>
      </View>
    );
  }

  return (
    <FlatList 
      contentContainerStyle={{ flexGrow: 1 }}
      data={userPhotos}
      keyExtractor={(item) => item.id}
      numColumns={3}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('UserPhotosView', { image: item })}>
          <Image
            source={{ uri: item.urls.regular }}
            style={{
              width: imageWidth,
              height: imageWidth,
              margin: 2.5,
            }}
          />
        </TouchableOpacity>
      )}
    />
  )
}
export default UserPhotos;
