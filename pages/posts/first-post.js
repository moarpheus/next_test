import Head from 'next/head';
import { getPost } from '../../lib/posts';


export async function getStaticProps() {
  const post = await getPost('first-post');
  return {
    props: { post },
  };
}


function FirstPost({ post }) {
  return (
    <>
      <main>
        <article dangerouslySetInnerHTML={{__html: post.body }} />
      </main>
    </>
  );
}

export default FirstPost;