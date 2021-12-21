import { getPost, getSlugs } from '../../lib/posts';

export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({ params: {slug} })),
    fallback: false,
  }
}

export async function getStaticProps({params: { slug }}) {
  const post = await getPost(slug);
  return {
    props: { post },
  };
}

function PostPage({ post }) {
  return (
    <>
      <main>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default PostPage;
