import React, { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import { ThemeContext } from "../../../utils/ThemeProvider";
import ImageCard from "../ImageCard/ImageCard";
import { fetchImages } from "../../../utils/api";

export default function SearchScreen() {
  const { theme } = useContext(ThemeContext);
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      fetchImages(query).then((images) => {
        setImages(images || []);
      });
    }
  }, [query]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      paddingTop: 50,
      backgroundColor: theme.colors.background,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
      color: theme.colors.text,
    },
    input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      paddingLeft: 10,
      marginBottom: 10,
      backgroundColor: theme.colors.card,
      color: theme.colors.text,
    },
    image: {
      width: 400,
      height: 400,
      marginBottom: 10,
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for images..."
        placeholderTextColor={theme.colors.text}
        value={query}
        onChangeText={setQuery}
      />
      <ScrollView>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </ScrollView>
    </View>
  );
}
