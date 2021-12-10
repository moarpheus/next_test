import Link from "next/link";

function HomePage() {
  return (
    <>
      <main>
        <h1>Home</h1>
      </main>
      <ul>
        <li>
          <Link href="posts/first-post">
            <a>
              First post
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default HomePage;