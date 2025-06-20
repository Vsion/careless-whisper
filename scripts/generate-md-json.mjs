// scripts/generate-md-json.js (构建脚本)
import { glob } from 'glob';
import fs from 'fs/promises';
import matter from 'gray-matter';

// 处理单个 Markdown 文件并生成对应的 JSON
async function processMarkdownFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const { content: markdown, data } = matter(content);
    const outputPath = filePath.replace('.md', '.json');
    
    // 原子写入（避免文件锁定）
    const tempPath = `${outputPath}.temp`;
    await fs.writeFile(tempPath, JSON.stringify({ markdown, data }, null, 2), 'utf8');
    await fs.rename(tempPath, outputPath);
    
    console.log(`✅ 处理完成: ${outputPath}`);
    return outputPath;
  } catch (error) {
    console.error(`❌ 处理失败: ${filePath}`, error);
    throw error;
  }
}

// 批量处理所有 Markdown 文件
async function processAllMarkdownFiles() {
  const markdownFiles = await glob('src/app/md/**/content.md');
  console.log(`找到 ${markdownFiles.length} 个 Markdown 文件`);
  
  for (const file of markdownFiles) {
    await processMarkdownFile(file);
  }
  
  console.log('所有 Markdown 文件已处理完成');
}

// 主函数
async function main() {
  try {
    // 判断是否是监听模式（由环境变量控制） 
    // process.argv[2] => -- {path}
    if (process.env.WATCHMD === 'true' && process.argv[2]) {
      // 监听模式：只处理指定的文件
      const modifiedFile = process.argv[2];
      console.log(`🔄 监听模式：处理修改的文件 ${modifiedFile}`);
      await processMarkdownFile(modifiedFile);
    } else {
      // 非监听模式：处理所有文件
      console.log('🔄 批量模式：处理所有 Markdown 文件');
      await processAllMarkdownFiles();
    }
  } catch (error) {
    console.error('处理过程中出错:', error);
    process.exit(1);
  }
}

// 执行主函数
main();