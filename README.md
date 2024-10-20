# Theme Switcher App with LocalStorage and Advanced CSS

This project demonstrates how to create a theme switcher in React using `localStorage` for persisting the selected theme and applying advanced CSS for smooth transitions between light and dark modes. The app features a custom hook, `useLocalStorage`, to store the theme preference, and uses modern CSS techniques like Flexbox for layout and transitions for UI effects.

## Features

- Toggle between light and dark themes.
- Custom React hook for managing `localStorage`.
- Advanced CSS with gradient backgrounds, hover effects, and button animations.
- Responsive design using Flexbox.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **CSS**: Advanced styling with Flexbox, transitions, and animations.

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Jay-Dalsaniya/theme-switcher-app.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd theme-switcher-app
   ```

3. **Install the required dependencies**:

   ```bash
   npm install
   ```

4. **Start the application**:

   ```bash
   npm start
   ```

5. **Open your browser and go to** `http://localhost:3000` to see the app in action.

## How It Works

### `useLocalStorage` Hook:

- `useLocalStorage` retrieves the initial value from `localStorage` if it exists; otherwise, it sets and stores the provided initial value.
- The hook returns both the stored value and a setter function to update the state and `localStorage` simultaneously.

### Component Behavior:

- The user can toggle between light and dark themes.
- The selected theme persists after page reload as it's saved in `localStorage`.
- The theme switcher button dynamically updates based on the current theme.

### CSS Features:

- Smooth background transitions between light and dark themes using CSS transitions.
- The layout is managed using Flexbox for centering the content.
- Buttons feature hover effects and animations using CSS `transform` and `transition` properties.

## Screenshots

### Light Theme
![Light Theme](image.png)

### Dark Theme
![Dark Theme](image-1.png)

This project demonstrates a practical and modern approach to implementing a theme switcher with persistence using React and `localStorage`, combined with sleek, responsive styling using advanced CSS techniques.
