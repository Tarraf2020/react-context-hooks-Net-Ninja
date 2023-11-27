import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

function ThemeToggle() {
  const toggle = useContext(ThemeContext);
  const {toggleTheme} = toggle
  return <button onClick={toggleTheme}>Toggle the theme</button>;
}

export default ThemeToggle;
