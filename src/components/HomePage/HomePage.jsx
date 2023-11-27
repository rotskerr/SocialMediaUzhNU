import React, { useState, useEffect, useContext } from "react";
шь
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ImageCard from "../ImageCard/ImageCard";
import { ThemeContext } from "../../../utils/ThemeProvider";
import { fetchImages } from '../../../utils/api';

const Tab = createMaterialTopTabNavigator();


const ImageScreen = ({ query }) => {
  const [images, setImages] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetchImages(query).then(setImages);
  }, [query]);

  return (
    <FlatList
      style={{ backgroundColor: theme.colors.background }}
      data={images}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ImageCard image={item} />}
    />
  );
};


const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  const screenOptions = {
    tabBarActiveTintColor: theme.colors.text,
    tabBarInactiveTintColor: theme.colors.text,
    tabBarStyle: {
      backgroundColor: theme.colors.background,
    },
    tabBarLabelStyle: {
      color: theme.colors.text,
    },
  };

  const renderImageScreen = (query) => (props) => <ImageScreen {...props} query={query} />;

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Random" component={renderImageScreen("vertical")} />
      <Tab.Screen name="Nature" component={renderImageScreen("nature")} />
    </Tab.Navigator>
  );
};

export default HomePage;