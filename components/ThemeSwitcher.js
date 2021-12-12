function ThemeSwitcher() {
  const darkMode = true;
  console.log(darkMode);
  const text = darkMode ? 'Light Mode' : 'Dark Mode'
  return (
    <>
      <button>{text}</button>
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