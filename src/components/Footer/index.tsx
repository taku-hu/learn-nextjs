import Image from 'next/image'
import styles from '@/src/components/Footer/Footer.module.scss'

export function Footer () {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.footer__link}
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.footer__logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  )
}
