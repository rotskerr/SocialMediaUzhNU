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
    } : {
      background: '#ffffff',
      text: '#000000',
    },
  });

  const toggleTheme = async () => {
    const newTheme = theme.colors.background === '#ffffff' ? 'dark' : 'light';
    await AsyncStorage.setItem('theme', newTheme);
    setTheme({
      colors: newTheme === 'dark' ? {
        background: '#000000',
        text: '#ffffff',
      } : {
        background: '#ffffff',
        text: '#000000',
      },
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
          } : {
            background: '#ffffff',
            text: '#000000',
          },
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
