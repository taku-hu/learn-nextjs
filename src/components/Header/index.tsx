import styles from '@/src/components/Header/Header.module.scss'

import Link from 'next/link'

export function Header () {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.header__link}>Index</a>
      </Link>
      <Link href="/about">
        <a className={styles.header__link}>About</a>
      </Link>
    </header>
  )
}
