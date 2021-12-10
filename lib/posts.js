import { readFile } from 'fs/promises';

export async function getPost(slug) {
  const data = await readFile(`content/${slug}.json`, 'utf8');
  return JSON.parse(data);
}