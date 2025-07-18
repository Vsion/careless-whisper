
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '浊音和半浊音',
}

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
