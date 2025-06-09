'use client';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Content({ content }: { content?: string }) {
  return <>
    <ReactMarkdown>
      {content}
    </ReactMarkdown>
    <h1>今天是大年初一, 祝大家 <span style={{ color: '#c8171b' }}><b>㊗</b> 新年快乐, 大吉大利, 心想事成, 最重要的是身体健康 ~</span></h1>
  </>
}