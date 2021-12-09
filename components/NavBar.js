import Link from "next/link";

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
      <style jsx>{`        
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
