'use client';

import { useState, useEffect } from 'react';
import Content from './content.mdx';
import HTML from '@/../public/sao.html';
import HTML2 from '@/../public/import-pord-price.html';

export default function meditation() {
  // 存储 HTML 内容
  const [htmlContent, setHtmlContent] = useState('');
  const [htmlContent2, setHtmlContent2] = useState('');

  useEffect(() => {
    // 从 public 目录拉取 sao.html 文件
    const loadHtml = async () => {
      try {
        const res = await fetch('/sao.html');
        const res2 = await fetch('/import-pord-price.html');
        const html = await res.text();
        const html2 = await res2.text();
        setHtmlContent(html);
        setHtmlContent2(html2);
      } catch (err) {
        console.error('HTML 加载失败:', err);
      }
    };

    loadHtml();
  }, []);

  return (
    <>
      <div className="">
        <Content />

        {/* 渲染 HTML 内容 */}
        <div 
          className="mt-8 border p-4 rounded bg-gray-50"
          dangerouslySetInnerHTML={{ __html: htmlContent || '' + htmlContent2 || '' }}
        />
      </div>
    </>
  );
}