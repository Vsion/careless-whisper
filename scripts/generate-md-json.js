// scripts/generate-md-json.js (构建脚本)
import { glob } from 'glob';
import fs from 'fs';
import matter from 'gray-matter';

// 读取所有 Markdown 文件并生成 JSON
const contents = await glob('src/app/md/**/content.md');
console.log(contents)

contents.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  const { content: markdown, data } = matter(content);
  const outputPath = filePath.replace('.md', '.json');
  
  fs.writeFileSync(outputPath, JSON.stringify({ markdown, data }));
});