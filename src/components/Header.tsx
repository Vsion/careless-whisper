import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import { basePath } from '../../public/constants';

export default function Header() {
  return <header className={styles.header}>
    <nav className={styles.nav}>
      <Link href={'/'} replace><img height={64} width={64} alt={'vsion'} className={styles.logo} src={basePath + '/logo.png'} /></Link>
      {/* <Link href={'/'} replace><img className={styles.logo} src={'/logo.png'} /></Link> */}
    </nav>
  </header>
}