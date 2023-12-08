import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeContext, ThemeProvider } from "./utils/ThemeProvider";
import MyTabs from "./src/components/HomePage/MyTabs";
import { fetchMe } from "./utils/api";
import AppNavigation from "./utils/AppNavigation";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const dataString = await fetchMe();
      //   await AsyncStorage.setItem("myProfileData", dataString);
      //   const user = JSON.parse(dataString);
      //   setUser(user);
    };

    fetchProfile();
  }, []);

  return (
    <ThemeProvider>
        <ThemedContainer>
          {/* {user ? <MyTabs /> : <SignUp />} */}
          <AppNavigation />
        </ThemedContainer>
    </ThemeProvider>
  );
};

const ThemedContainer = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 35,
      paddingLeft: 15,
      paddingRight: 15,
      backgroundColor: theme.colors.background,
    },
  });

  return <View style={styles.container}>{children}</View>;
};

export default App;
