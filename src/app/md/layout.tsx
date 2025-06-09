'use client';

import { App } from 'antd';
import { ThemeProvider } from 'antd-style';
import StyleRegistry from '@/layout/StyleRegistry';
import themeConfig from '@/theme/themeConfig';

export default function Layout({
  children,
  className,
}: {
  children: React.ReactNode,
  className?: string,
}) {
  return (
    <StyleRegistry>
      <ThemeProvider {...themeConfig}>
        <App className={className}>{children}</App>
      </ThemeProvider>
    </StyleRegistry>
  )
}
