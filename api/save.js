import { writeFile } from 'fs/promises';
import { join } from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text } = req.body;

  if (typeof text !== 'string') {
    return res.status(400).json({ error: 'Invalid content' });
  }

  const filePath = join(process.cwd(), 'content.md');

  await writeFile(filePath, text, 'utf8');

  return res.status(200).json({ success: true });
}