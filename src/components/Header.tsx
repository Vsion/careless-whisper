import React from 'react';
import Link from '../../node_modules/next/link';
import styles from './header.module.css';

export default () => {
  return <header className={styles.header}>
    <nav className={styles.nav}>
      <Link href={'/'}><img className={styles.logo} src={'/logo.png'} /></Link>
    </nav>
  </header>
}