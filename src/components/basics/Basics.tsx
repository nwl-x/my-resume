import Basic from '@/components/basics/Basic'
import ImgBase64 from '@/components/ImgBase64'

import formatBasics from '@/formaters/formatBasics'

// == TypeScript ==
import type { Basics } from '@/type'

// == CSS ==
import styles from '@/components/basics/basics.module.css'

const Basics: React.FC<Basics> = ({ image, firstname, lastname, email, phone, url, location, profiles }) => (
  <section className={styles.basics}>
    <article>
      <ImgBase64 url={image} className={styles.avatar} />
    </article>

    <h2>
      {firstname} {lastname}
    </h2>

    {formatBasics({ email, phone, url, location, profiles }).map((basic, key) => (
      <Basic key={key} {...basic} />
    ))}
  </section>
)

export default Basics
