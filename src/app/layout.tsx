import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import classnames from 'classnames';
import Header from '../components/Header';
import '../assets/style/global.css';
import { basePath } from '@/../public/constants';

export const metadata: Metadata = {
  title: 'Careless Whisper | Vsion',
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
      <body>
        <Header />
        <div className={classnames(inter.className, 'page')}>{children}</div>  
      </body>
    </html>
    
  )
}
