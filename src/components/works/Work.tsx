import { Link } from 'react-bootstrap-icons'
import ImgBase64 from '@/components/ImgBase64'

import splitArray from '@/utils/splitArray'
import formatDuration from '@/formaters/formatDuration'

// == TypeScript ==
import type { Work } from '@/type'

// == CSS ==
import styles from '@/components/works/works.module.css'

const Work: React.FC<Work> = ({ url, image, company, position, startDate, endDate, realizations }) => (
  <article className={styles.article}>
    <section>
      <a href={url} target="_blank" className={styles.url} rel="noopener noreferrer">
        <ImgBase64 url={image} className={styles.logo} />
        <span className={styles.company}>{company}</span>
        <Link className={styles.icon} />
        <span className={styles.duration}>({formatDuration(startDate, endDate)})</span>
      </a>
    </section>
    <section className={styles.position}>{position}</section>

    <section className={styles.realizations}>
      {splitArray(realizations).map((items, key) => (
        <ul key={key} className={styles.ul}>
          {items.map((item, key) => (
            <li key={key} className={styles.li}>
              {item}
            </li>
          ))}
        </ul>
      ))}
    </section>
  </article>
)

export default Work
