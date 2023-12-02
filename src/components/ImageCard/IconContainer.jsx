import React from 'react';
import { View } from 'react-native';
import IconButton from './IconButton';

const IconContainer = ({ theme, styles }) => (
  <View style={styles.iconContainer}>
    <IconButton iconName="heart-outline" color={theme.colors.text} />
    <IconButton iconName="chatbubble-outline" color={theme.colors.text} />
    <IconButton iconName="send-outline" color={theme.colors.text} />
    <IconButton iconName="bookmark-outline" color={theme.colors.text} />
  </View>
);

export default IconContainer;