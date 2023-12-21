import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './styles.module.css';

// const styles = {}

export default function Index() {
  return (
    <>
      <div className={'container'}>
        <Image
          className={styles.logo}
          src="/Eren.jpg"
          alt="艾伦"
          width={320}
          height={320}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link
          href="/md/meditation"
          className={styles.card}
        >
          <h2>
            冥想与正念练习 <span>-&gt;</span>
          </h2>
          <p>冥想和正念练习是两种强大的心理健康工具，它们有助于提高专注力、减少压力、增强情绪稳定性，并提高总体的生活质量。</p>
        </Link>
      </div>
    </>
  )
}
