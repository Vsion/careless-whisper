
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '体言、连体词和助词',
}

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
