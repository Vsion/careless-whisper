'use client';

import React from 'react';
import Content from '@/components/ClientContent';
import contentData from './content.json'; // 导入预生成的 JSON
import styles from './index.module.css';

export default function PostPage() {
  const { markdown, data } = contentData;
  return <div className={'container md'}>
    <h1>{data.title}</h1>
    <p className="date">{data.date}</p>
    <Content wrapperClassName={styles.dongci} content={markdown} />
  </div>
}
