import { Link } from 'react-bootstrap-icons'
import ImgBase64 from '@/components/ImgBase64'
import formatDuration from '@/formaters/formatDuration'

// == TypeScript ==
import type { Work } from '@/type'

// == CSS ==
import styles from '@/components/works/works.module.css'

const Work: React.FC<Work> = ({ url, image, company, position, startDate, endDate, realizations }) => (
  <article>
    <section>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <ImgBase64 url={image} className={styles.logo} />
        <span className={styles.company}>{company}</span>
        <Link className={styles.icon} />
        <span className={styles.duration}>({formatDuration(startDate, endDate)})</span>
      </a>
    </section>

    <section className={styles.position}>{position}</section>

    <section className={styles.realizations}>
      <ul>
        {realizations.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </section>
  </article>
)

export default Work
