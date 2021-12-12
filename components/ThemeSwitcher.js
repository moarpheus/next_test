import React, { useState } from 'react';

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
        cursor: pointer;
        }
      `}
      </style>
    </>
  )
}

export default ThemeSwitcher;