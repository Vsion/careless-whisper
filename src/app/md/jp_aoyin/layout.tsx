
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '日语拗音表（平假名+片假名+罗马音）',
}

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
