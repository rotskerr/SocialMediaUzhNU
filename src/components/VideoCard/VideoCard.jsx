// import React, { useContext, useState, useRef } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { Video } from "expo-av";
// import { ThemeContext } from "../../../utils/ThemeProvider";
// import ProgressBar from "./ProgressBar";
// const VideoCard = ({ video }) => {
//   const { theme } = useContext(ThemeContext);
//   const [userAvatarUrl, setUserAvatarUrl] = useState(
//     "https://th.bing.com/th/id/OIP.KGdLPsiqGjKqCYuhzhmmWgHaEP?rs=1&pid=ImgDetMain"
//   );
//   const videoRef = useRef(null);

//   const handlePress = async () => {
//     const status = await videoRef.current.getStatusAsync();
//     if (status.isPlaying) {
//       videoRef.current.pauseAsync();
//     } else {
//       videoRef.current.playAsync();
//     }
//   };

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [videoFinished, setVideoFinished] = useState(false);

//   const handlePlaybackStatusUpdate = (status) => {
//     setIsPlaying(status.isPlaying);
//     if (status.didJustFinish) {
//       setVideoFinished(true); // Встановлюємо videoFinished на true при завершенні відео
//     }
//   };
  
//   return (
//     <View style={[styles.card, { backgroundColor: theme.colors.background }]}>
//       <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
//         <Image source={{ uri: userAvatarUrl }} style={styles.userAvatar} />
//         <Text style={[styles.text, { color: theme.colors.text }]}>123</Text>
//       </View>
//       <TouchableOpacity onPress={handlePress}>
//         <Video
//           ref={videoRef}
//           source={require("../../../assets/images/1.mp4")}
//           style={[
//             styles.video,
//             { aspectRatio: video ? video.width / video.height : 1 },
//           ]}
//           useNativeControls={false}
//           resizeMode="contain"
//           onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
//         />
//         {!isPlaying && videoFinished && (
//           <TouchableOpacity
//           style={[
//             styles.replayIcon,
//             {
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: [{ translateX: -12 }, { translateY: -12 }],
//               opacity: videoFinished ? 1 : 0, // Встановлюємо opacity в залежності від videoFinished
//             },
//           ]}
//           onPress={() => {
//             videoRef.current.replayAsync();
//           }}
//         >
//           <Ionicons name="refresh" size={24} color={theme.colors.text} />
//         </TouchableOpacity>
//         )}

//         <ProgressBar videoRef={videoRef} />
//       </TouchableOpacity>
//       <View
//         style={[
//           styles.infoContainer,
//           { backgroundColor: theme.colors.background },
//         ]}
//       >
//         <View style={styles.iconContainer}>
//           <TouchableOpacity style={styles.likeContainer}>
//             <Ionicons
//               name="heart-outline"
//               size={24}
//               color={theme.colors.text}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Ionicons
//               name="chatbubble-outline"
//               size={24}
//               color={theme.colors.text}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Ionicons name="send-outline" size={24} color={theme.colors.text} />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Ionicons
//               name="bookmark-outline"
//               size={24}
//               color={theme.colors.text}
//             />
//           </TouchableOpacity>
//         </View>
//         <Text
//           style={[styles.text, { color: theme.colors.text, marginRight: 10 }]}
//         >
//           14 likes
//         </Text>
//         <Text style={[styles.text, { color: theme.colors.text }]}>123</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={[styles.card, { backgroundColor: theme.colors.background }]}>
//       <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
//         <Image source={{ uri: userAvatarUrl }} style={styles.userAvatar} />
//         <Text style={[styles.text, { color: theme.colors.text }]}>123</Text>
//       </View>
//       <TouchableOpacity onPress={handlePress}>
//         <Video
//           ref={videoRef}
//           source={require("../../../assets/images/1.mp4")}
//           style={[
//             styles.video,
//             { aspectRatio: video ? video.width / video.height : 1 },
//           ]}
//           useNativeControls={false}
//           resizeMode="contain"
//         />
//         <ProgressBar videoRef={videoRef} />
//       </TouchableOpacity>
//       <View
//         style={[
//           styles.infoContainer,
//           { backgroundColor: theme.colors.background },
//         ]}
//       >
//         <View style={styles.iconContainer}>
//           <TouchableOpacity style={styles.likeContainer}>
//             <Ionicons
//               name="heart-outline"
//               size={24}
//               color={theme.colors.text}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Ionicons
//               name="chatbubble-outline"
//               size={24}
//               color={theme.colors.text}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Ionicons name="send-outline" size={24} color={theme.colors.text} />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Ionicons
//               name="bookmark-outline"
//               size={24}
//               color={theme.colors.text}
//             />
//           </TouchableOpacity>
//         </View>
//         <Text
//           style={[styles.text, { color: theme.colors.text, marginRight: 10 }]}
//         >
//           14 likes
//         </Text>
//         <Text style={[styles.text, { color: theme.colors.text }]}>123</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     marginBottom: 10,
//   },
//   video: {
//     width: "100%",
//     height: null,
//   },
//   infoContainer: {
//     padding: 10,
//   },
//   text: {},
//   iconContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 10,
//   },
//   userAvatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
//   },
// });

// export default VideoCard;
