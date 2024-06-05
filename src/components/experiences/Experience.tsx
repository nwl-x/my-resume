import { FC } from 'react'
import { Link } from 'react-bootstrap-icons'
import ImgBase64 from '@/components/ImgBase64'
import splitArray from '@/utils/splitArray'
import type { Experience as ExperienceType } from '@/type'
import styles from '@/components/experiences/Experiences.module.css'

import formatDuration from '@/formaters/formatDuration'

const Experience: FC<ExperienceType> = ({
  url,
  image,
  company,
  description,
  position,
  startDate,
  endDate,
  realizations
}) => {
  return (
    <article className={styles.article}>
      <a href={url} target="_blank" className={styles.url} rel="noopener noreferrer">
        <ImgBase64 url={image} className={styles.logo} />
        <span className={styles.company}>{company}</span>
        <Link className={styles.icon} />
        <span className={styles.desc}>({description})</span>
      </a>

      <section className={styles.position}>
        {position} <span className={styles.duration}>({formatDuration(startDate, endDate)})</span>
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
}

export default Experience
