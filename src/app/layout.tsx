import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Header from '../components/Header';
import '../assets/style/global.css';
import { basePath } from '@/../public/constants';
import classnames from 'classnames';

const APP_DEFAULT_TITLE = 'Careless Whisper by Vsion'

export const metadata: Metadata = {
  title: {
    default: APP_DEFAULT_TITLE,
    template: '%s | ' + APP_DEFAULT_TITLE,
  },
  description: 'sui-sui-nian',
}

const inter = Inter({ subsets: ['latin'] })

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* fix gh-pages icon */}
      <link rel="shortcut icon" type="image/x-icon" href={basePath + '/favicon.ico'} />
      <body suppressHydrationWarning={true}>
        <Header />
        <div className={classnames(inter.className, 'page')}>
          {children}
        </div>
      </body>
    </html>

  )
}
