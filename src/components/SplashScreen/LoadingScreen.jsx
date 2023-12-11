import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Home'); 
    }, 3000); // delay of 3 seconds
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

export default LoadingScreen;