import { readdir, readFile } from 'fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';
import { get } from 'http';

export async function getPost(slug) {
  const source = await readFile(`content/pages/${slug}.md`, 'utf8');
  const { data: { date, title }, content } = matter(source);
  const body = marked(content);
  return { date, title, body };
}

export async function getSlugs() {
  const suffix = '.md'
  const files = await readdir('content/pages');
  return files.filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));
}

export async function getPosts() {
  const slugs = await getSlugs();
  const posts = [];
  console.log(slugs);
  return slugs;
}