import Link from "next/link";

function NabBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NabBar;
