import { FC } from 'react'
import { Link } from 'react-bootstrap-icons'
import ImgBase64 from '@/components/ImgBase64'
import type { Education as EducationType } from '@/type'
import styles from '@/components/educations/educations.module.css'

const Education: FC<EducationType> = ({ institution, description, url, image, startDate }) => (
  <article className={styles.formation}>
    <a href={url} className={styles.a} target="_blank" rel="noopener noreferrer">
      <ImgBase64 url={image} className={styles.logo} />
      <span className={styles.logo}>{institution}</span>
      <Link className={styles.icon} />
      <span className={styles.duration}>({startDate})</span>
    </a>

    <section className={styles.desc}>{description}</section>
  </article>
)

export default Education
