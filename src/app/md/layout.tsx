'use client';

import { App } from 'antd';
import { ThemeProvider } from 'antd-style';
import StyleRegistry from '@/layout/StyleRegistry';
import themeConfig from '@/theme/themeConfig';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StyleRegistry>
      <ThemeProvider {...themeConfig}>
        <App>{children}</App>
      </ThemeProvider>
    </StyleRegistry>
  )
}
