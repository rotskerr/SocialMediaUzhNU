import React, { useEffect, useContext, useRef } from "react";
import { View, Animated } from "react-native";
import { ThemeContext } from "../../../utils/ThemeProvider";

const ProgressBar = ({ videoRef }) => {
  const { theme } = useContext(ThemeContext);
  const progress = useRef(new Animated.Value(0)).current;

  const updateProgress = async () => {
    const status = await videoRef.current.getStatusAsync();
    if (status.durationMillis > 0) {
      const progressValue = status.positionMillis / status.durationMillis;
      animateProgress(progressValue);
    }
  };

  const animateProgress = (value) => {
    Animated.timing(progress, {
      toValue: value,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    const interval = setInterval(updateProgress, 100);
    return () => clearInterval(interval);
  }, [videoRef]);

  const progressBarStyle = {
    height: 2,
    backgroundColor: theme.colors.background,
  };

  const progressStyle = {
    width: progress.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
    }),
    height: 2,
    backgroundColor: theme.colors.text,
  };

  return (
    <View style={progressBarStyle}>
      <Animated.View style={progressStyle} />
    </View>
  );
};

export default ProgressBar;
