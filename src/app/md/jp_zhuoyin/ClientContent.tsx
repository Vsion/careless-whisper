'use client';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './index.module.css';

// 自定义表格渲染组件（可选，但推荐）
const components = {
  table: ({ children }: any) => (
    <table className={styles['markdown-table']}>
      {children}
    </table>
  ),
  thead: ({ children }: any) => <thead>{children}</thead>,
  tbody: ({ children }: any) => <tbody>{children}</tbody>,
  tr: ({ children }: any) => <tr>{children}</tr>,
  th: ({ children }: any) => <th className={styles['markdown-th']}>{children}</th>,
  td: ({ children }: any) => <td className={styles['markdown-td']}>{children}</td>
};

export default function Content({ content }: { content?: string }) {
  return <>
    <ReactMarkdown
      remarkPlugins={[ remarkGfm ]}
        components={components}      // 自定义表格渲染
    >
      {content}
    </ReactMarkdown>
    <h1>学习日语中~</h1>
  </>
}