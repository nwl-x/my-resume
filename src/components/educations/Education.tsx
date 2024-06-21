import { Link } from 'react-bootstrap-icons'
import ImgBase64 from '@/components/ImgBase64'
import formatDuration from '@/formaters/formatDuration'

// == TypeScript ==
import type { Education as EducationType } from '@/type'

// == CSS ==
import styles from '@/components/educations/educations.module.css'

const Education: React.FC<EducationType> = ({ institution, description, url, image, startDate, endDate }) => (
  <article className={styles.article}>
    <a href={url} className={styles.url} target="_blank" rel="noopener noreferrer">
      <ImgBase64 url={image} className={styles.logo} />
      <span className={styles.school}>{institution}</span>
      <Link className={styles.icon} />
      <span className={styles.duration}>({formatDuration(startDate, endDate)})</span>
    </a>

    <section className={styles.desc}>{description}</section>
  </article>
)

export default Education
