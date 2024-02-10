'use client';

import Link from 'next/link';
import { useStyles } from './styles';
import { basePath } from '@/../public/constants';
import Layout from './md/layout';

export default function Index() {
  const { styles } = useStyles()
  return (
    <Layout>
      <div className={'container'}>
        <img
          className={styles.logo}
          src={basePath + '/Eren.jpg'}
          // src={'/Eren.jpg'}
          alt="艾伦"
          width={320}
          height={320}
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
        <Link
          href="/md/multirepo.vs.monorepo"
          className={styles.card}
        >
          <h2>
            Multirepo vs Monorepo <span>-&gt;</span>
          </h2>
          <p>项目代码管理方式对比: 多仓库多模块应用 vs 单仓库多模块应用</p>
        </Link>
        <Link
          href="/md/enhance-cognition"
          className={styles.card}
        >
          <h2>
           Enhance cognition <span>-&gt;</span>
          </h2>
          <p>如何提升认知</p>
        </Link>
        <Link
          href="/md/ssh-with-accounts"
          className={styles.card}
        >
          <h2>
           github / gitlab 多账户管理 <span>-&gt;</span>
          </h2>
          <p>ssh</p>
        </Link>
        <Link
          href="/md/axios"
          className={styles.card}
        >
          <h2>
            Axios <span>-&gt;</span>
          </h2>
          <p>axios vs fetch</p>
        </Link>
        <Link
          href="/md/react-vs-vue"
          className={styles.card}
        >
          <h2>
            React vs Vue <span>-&gt;</span>
          </h2>
          <p>which is the best ?</p>
        </Link>
      </div>
    </Layout>
  )
}
