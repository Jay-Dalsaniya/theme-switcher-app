import React from "react";
import "./App.css"; // Import the CSS file
import ThemeToggleButton from "./ThemeToggleButton"; // Ensure this path is correct
import { useAppTheme } from "./AppThemeContext"; // Ensure this path is correct

const App = () => {
  const { theme } = useAppTheme();

  return (
    <div className={theme}>
      <h1>Hello, Theme Switcher!</h1>
      <ThemeToggleButton />
    </div>
  );
};

export default App; // Ensure there's a default export
