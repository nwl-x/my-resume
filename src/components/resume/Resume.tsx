import Profil from '@/components/profil/Profil'
import Infos from '@/components/infos/Infos'
import Skills from '@/components/skills/Skills'
import Educations from '@/components/educations/Educations'
import Experiences from '@/components/experiences/Experiences'

import { getResumeData } from '@/lib/api'
import styles from '@/components/resume/resume.module.css'

const Resume = async () => {
  const {
    basics: { label, summary, image, firstname, lastname, email, phone, url, location, profiles },
    work = [],
    education = [],
    skills = []
  } = await getResumeData()

  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <Profil label={label} summary={summary} />
        <Experiences works={work} />
        <Educations educations={education} />
      </section>

      <section className={styles.sidebar}>
        <Infos image={image} fullname={`${firstname} ${lastname}`} infos={{ email, phone, url, location, profiles }} />
        <Skills skills={skills} />
      </section>
    </main>
  )
}

export default Resume
