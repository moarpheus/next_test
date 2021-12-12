import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

function NavBar() {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <ThemeSwitcher />
      <style jsx>{`        
        nav {
          display: flex;
          justify-content: space-between;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        a {
          color: red;
        }
      `}</style>
    </nav>
  );
}

export default NavBar;
