import React from 'react';
import { useAppTheme } from './AppThemeContext'; // Ensure this path is correct

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useAppTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ThemeToggleButton; // Ensure there's a default export
