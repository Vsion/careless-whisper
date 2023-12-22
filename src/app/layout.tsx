import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import classnames from 'classnames';
import Header from '../components/Header';
import '../assets/style/global.css';

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
      <body>
        <Header />
        <div className={classnames(inter.className, 'page')}>{children}</div>  
      </body>
    </html>
    
  )
}
