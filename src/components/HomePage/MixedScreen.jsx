// // MixedScreen.jsx
// import React, { useState, useEffect, useContext } from "react";
// import { ScrollView } from "react-native";
// import ImageCard from "../ImageCard/ImageCard";
// import VideoCard from "../VideoCard/VideoCard";
// import { ThemeContext } from "../../../utils/ThemeProvider";
// import { fetchImages, fetchVideos } from "../../../utils/api";

// const MixedScreen = ({ query }) => {
//   const [items, setItems] = useState([]);
//   const { theme } = useContext(ThemeContext);

//   useEffect(() => {
//     Promise.all([fetchImages(query), fetchVideos(query)]).then(
//       ([images, videos]) => {
//         images = images || [];
//         videos = videos || [];
//         setItems(
//           [...images, ...videos].sort((a, b) => b.created_at - a.created_at)
//         );
//       }
//     );
//   }, [query]);

//   return (
//     <ScrollView style={{ backgroundColor: theme.colors.background }}>
//       {items.map((item) =>
//         item.type === "photo" ? (
//           <ImageCard key={item.id} image={item} />
//         ) : (
//           <VideoCard key={item.id} video={item} />
//         )
//       )}
//     </ScrollView>
//   );
// };

// export default MixedScreen;
