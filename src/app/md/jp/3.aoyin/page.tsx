'use client';

import React from 'react';
import Content from './ClientContent';
import contentData from './content.json'; // 导入预生成的 JSON

export default function PostPage() {
  // 使用 content 和 data 渲染您的页面

  // const [content, setContent] = React.useState('');
  // const [data, setData] = React.useState<any>({});

  // React.useEffect(() => {
  //   // 假设 "/api/post" 是您的 API 路由
  //   fetch('/md/react-vs-vue/md-content')
  //     .then(response => response.json())
  //     .then(post => {
  //       setData(post.data);
  //       setContent(post.content);
  //     });
  // }, []);
  // // 获取当前文件的目录路径
  // const currentFileDirectory = path.dirname(__filename);
  // // 构建到 'content.md' 的完整路径
  // const filePath = path.join(currentFileDirectory, 'content.md');
  // __filename 指向的是编译后的文件路径（在 .next 目录下）, 所以改为从 process.cwd() 添加相对路径
  // const filePath = path.join(process.cwd(), '/src/app/md/react-vs-vue', `content.md`);
  // const fileContents = fs.readFileSync(filePath, 'utf8');
  // const { content, data } = matter(fileContents);
  const { markdown, data } = contentData;
  return <div className={'container md'}>
    <h1>{data.title}</h1>
    <p className="date">{data.date}</p>
    <Content content={markdown} />
  </div>
}
