import styles from '@/src/components/Headline/Headline.module.scss'

type Props = {
  page: string;
  children: JSX.Element;
}

export function Headline ({ page, children }: Props) {
  return (
    <div>
      <h1 className={styles.title}>{page} page</h1>

      <p className={styles.description}>
        Get started by editing{' '}
        {children}
      </p>
    </div>
  )
}
