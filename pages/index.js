import Link from "next/link";
import { getPosts } from "../lib/posts";

export async function getStaticProps() {
  const slugs = await getPosts();
  return {
    props: { slugs },
  }
}

function HomePage({ props }) {
  console.log(props);
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