
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'React is the best',
}

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
