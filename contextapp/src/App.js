import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/authContext";
import ThemeContextProvider from "./contexts/themeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
          <Test />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
