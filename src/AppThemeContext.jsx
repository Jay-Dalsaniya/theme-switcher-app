import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context for theme management
const AppThemeContext = createContext();

// Custom hook to use the AppThemeContext
export const useAppTheme = () => {
  return useContext(AppThemeContext);
};

// AppThemeProvider component to provide theme state and toggle function
export const AppThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Load the theme from local storage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save to local storage
  };

  return (
    <AppThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
};
