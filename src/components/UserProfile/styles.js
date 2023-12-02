import { StyleSheet } from 'react-native';

export const getStyles = (theme) => StyleSheet.create({
  userInfo: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  username: {
    fontWeight: "bold",
    fontSize: 20,
    color: theme.colors.text,
  },
  realName: {
    fontSize: 16,
    color: theme.colors.text,
  },
  bio: {
    marginTop: 10,
    color: theme.colors.text,
    fontSize: 16,
    textAlign: "left",
    flexWrap: "wrap",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginTop: 20,
    alignItems: "center",
  },
  stat: {
    alignItems: "center",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginLeft: 20,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
    alignItems: "center",
  },
  button: {
    width: 150,
    color: theme.colors.text,
    borderRadius: 10,
  },
});