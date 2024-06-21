// == TypeScript ==
import type { BasicsFormatted } from '@/type'

// == CSS ==
import styles from '@/components/basics/basics.module.css'

const Basic: React.FC<BasicsFormatted> = ({ icon: Icon, url, texts }) => {
  const myText = texts.map((text, key) => <p key={key}>{text}</p>)

  return (
    <article>
      <section>
        <Icon className={styles.icon} />
      </section>

      <section>
        {url ? (
          <a href={url} target="_blank">
            {myText}
          </a>
        ) : (
          myText
        )}
      </section>
    </article>
  )
}

export default Basic
