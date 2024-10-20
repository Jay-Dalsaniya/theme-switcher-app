# React Custom Hook with Advanced CSS

This project demonstrates how to create a custom hook for managing `localStorage` in React and apply advanced CSS styling to enhance the user interface. The project uses `useLocalStorage` to persist the state in `localStorage` and implements smooth animations, transitions, and a responsive design using modern CSS techniques.

## Features

- Custom React hook for managing `localStorage`.
- Advanced CSS with gradient backgrounds, hover effects, and button animations.
- Responsive, modern design using Flexbox.
- Example usage of the `useLocalStorage` hook to store and retrieve user names.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **CSS**: Advanced styling with Flexbox, transitions, and animations.

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/react-custom-hook-advanced-css.git
   ```

2. **Navigate into the project directory**

   ```bash
   cd react-custom-hook-advanced-css
   ```

3. **Install the required dependencies**

   ```bash
   npm install
   ```

4. **Start the application**

   ```bash
   npm start
   ```

5. **Open your browser and go to** `http://localhost:3000` to see the app in action.

## How It Works

### useLocalStorage Hook:

- `useLocalStorage` retrieves the initial value from `localStorage` if available, or it sets the provided initial value.
- The hook returns the stored value and a setter function to update both the state and `localStorage`.

### Component Behavior:

- On clicking the buttons, the name in the `localStorage` changes, and the updated value is reflected in the UI.
- The value persists after refreshing the page as it's stored in `localStorage`.

### CSS Features:

- Gradient background creates a smooth transition between two colors.
- The container is centered using Flexbox, with shadows and rounded corners to create a card-like effect.
- Buttons have hover and click effects using CSS transitions and transform properties.

## Screenshots

![alt text](image.png)

![alt text](image-1.png)
