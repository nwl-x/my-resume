import { Link } from 'react-bootstrap-icons'
import ImgBase64 from '@/components/ImgBase64'

import splitArray from '@/utils/splitArray'
import formatDuration from '@/formaters/formatDuration'

// == TypeScript ==
import type { Experience as ExperienceType } from '@/type'

// == CSS ==
import styles from '@/components/experiences/Experiences.module.css'

const Experience: React.FC<ExperienceType> = ({ url, image, company, position, startDate, endDate, realizations }) => (
  <article className={styles.article}>
    <section className={styles.position}>
      {position} <span className={styles.duration}>({formatDuration(startDate, endDate)})</span>
    </section>

    <section>
      <a href={url} target="_blank" className={styles.url} rel="noopener noreferrer">
        <ImgBase64 url={image} className={styles.logo} />
        <Link className={styles.icon} />
        <span className={styles.company}>{company}</span>
      </a>
    </section>

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

export default Experience
