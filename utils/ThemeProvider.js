import React, { createContext, useState, useEffect } from 'react';
import { Appearance, useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState({
    colors: colorScheme === 'dark' ? {
      background: '#000000',
      text: '#ffffff',
      // ...other dark theme colors
    } : {
      background: '#ffffff',
      text: '#000000',
      // ...other light theme colors
    },
    // ...other theme properties
  });

  const toggleTheme = async () => {
    const newTheme = theme.colors.background === '#ffffff' ? 'dark' : 'light';
    await AsyncStorage.setItem('theme', newTheme);
    setTheme({
      colors: newTheme === 'dark' ? {
        background: '#000000',
        text: '#ffffff',
        // ...other dark theme colors
      } : {
        background: '#ffffff',
        text: '#000000',
        // ...other light theme colors
      },
      // ...other theme properties
    });
  };

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('theme');
      if (storedTheme) {
        setTheme({
          colors: storedTheme === 'dark' ? {
            background: '#000000',
            text: '#ffffff',
            // ...other dark theme colors
          } : {
            background: '#ffffff',
            text: '#000000',
            // ...other light theme colors
          },
          // ...other theme properties
        });
      }
    };

    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};