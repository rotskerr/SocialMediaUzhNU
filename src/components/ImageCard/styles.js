import { StyleSheet } from 'react-native';

export const getStyles = (theme) => StyleSheet.create({
  card: {
    paddingTop: 10,
    marginBottom: 10,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: null,
  },
  infoContainer: {
    padding: 10,
  },
  text: {
    textAlign: "left",
    color: theme.colors.text,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  likesCommentsContainer: {
    alignItems: "flex-start",
  },
});