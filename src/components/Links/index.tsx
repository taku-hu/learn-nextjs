import styles from '@/src/components/Links/Links.module.scss'

export function Links () {
  const items = [
    {
      href: 'https://nextjs.org/docs',
      title: 'Documentation →',
      discription: 'Find in-depth information about Next.js features and API.'
    },
    {
      href: 'https://nextjs.org/learn',
      title: 'Learn →',
      discription: 'Learn about Next.js in an interactive course with quizzes'
    },
    {
      href: 'https://github.com/vercel/next.js/tree/master/examples',
      title: 'Examples →',
      discription: 'Discover and deploy boilerplate example Next.js projects.'
    },
    {
      href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
      title: 'Deploy →',
      discription: 'Instantly deploy your Next.js site to a public URL with Vercel.'
    }
  ]

  return (
    <div className={styles.grid}>
      {items.map(item => {
        return (
          <a
            href={item.href}
            className={styles.card}
            key={item.title}
          >
            <h2>{item.title}</h2>
            <p>{item.discription}</p>
          </a>
        )
      })}
    </div>
  )
}
