import fs from 'fs';
import path from 'path';
import { type NextRequest, NextResponse } from 'next/server';
import matter from 'gray-matter';

export async function GET(req: NextRequest) {
  const filePath = path.join(process.cwd(), '/src/app/md/react-vs-vue', `content.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);
  return NextResponse.json({ content, data });
}
