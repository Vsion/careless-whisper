
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Axios',
}

export default function({ children }: { children: React.PropsWithChildren }) {
  return <>{children}</>
}
