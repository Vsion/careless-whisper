
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '五十音图(清音)',
}

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
