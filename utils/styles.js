import { StyleSheet } from 'react-native';

export default function getStyles(theme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "flex-start",
      justifyContent: "center",
      padding: 10,
    },
    text: {
      color: theme.colors.text,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    profileInfo: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
    },
    username: {
      fontWeight: "bold",
      fontSize: 20,
      color: theme.colors.text,
    },
    stats: {
      flexDirection: "row",
      justifyContent: "space-around",
      flex: 1,
    },
    stat: {
      alignItems: "center",
    },
  });
}