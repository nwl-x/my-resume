// == TypeScript ==
import type { InfosFormatted } from '@/type'

// == CSS ==
import styles from '@/components/infos/Infos.module.css'

const Info: React.FC<InfosFormatted> = ({ icon: Icon, url, texts }) => {
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

export default Info
