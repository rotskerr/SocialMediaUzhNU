import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ iconName, color, size = 24 }) => (
  <TouchableOpacity>
    <Ionicons
      name={iconName}
      size={size}
      color={color}
    />
  </TouchableOpacity>
);

export default IconButton;