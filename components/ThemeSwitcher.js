import React, { useState } from 'react';
import DarkTheme from './DarkTeme';

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);
  const text = darkMode ? 'Light Mode' : 'Dark Mode'
  console.log(darkMode);
  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>{text}</button>
      <style jsx>{`
      button {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        }
      `}
      </style>
      {darkMode && <DarkTheme />}
    </>
  )
}

export default ThemeSwitcher;