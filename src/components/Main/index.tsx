import styles from '@/src/components/Main/Main.module.scss'

import { Headline } from '@/src/components/Headline'
import { Links } from '@/src/components/Links'

type Props = {
  page: string;
}

export function Main ({ page }: Props) {
  return (
    <main className={styles.main}>
      <Headline page={page}>
        <code className={styles.code}>pages/{page}.js</code>
      </Headline>

      <Links />
    </main>
  )
}
