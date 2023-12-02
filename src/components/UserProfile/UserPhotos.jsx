import React, { useEffect, useState } from "react";
import { Image, FlatList, Dimensions } from "react-native";
import { fetchUserPhotos } from "../../../utils/api";

const UserPhotos = ({ username }) => {
  const [userPhotos, setUserPhotos] = useState([]);

  useEffect(() => {
    const getUserPhotos = async () => {
      const photos = await fetchUserPhotos(username);
      setUserPhotos(photos);
    };

    getUserPhotos();
  }, [username]);

  const imageWidth = Dimensions.get("window").width / 3;

  return (
    <FlatList
      contentContainerStyle={{ flexGrow: 1 }}
      data={userPhotos}
      keyExtractor={(item) => item.id}
      numColumns={3}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item.urls.regular }}
          style={{
            width: '33%',
            height: imageWidth,
            margin: 2.5,
          }}
        />
      )}
    />
  );
};

export default UserPhotos;