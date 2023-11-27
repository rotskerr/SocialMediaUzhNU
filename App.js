import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext, ThemeProvider } from "./utils/ThemeProvider";
import MyTabs from "./src/components/HomePage/MyTabs";

const App = () => {
  // const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await AsyncStorage.getItem("user");
      // setUser(user);
    };

    fetchUser();
  }, []);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <ThemedContainer>
          {/* {user ? <MyTabs /> : <SignUp />} */}
          <MyTabs />
        </ThemedContainer>
      </NavigationContainer>
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
