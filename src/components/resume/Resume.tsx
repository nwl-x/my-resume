import Profil from '@/components/profil/Profil'
import Infos from '@/components/infos/Infos'
import Skills from '@/components/skills/Skills'
import Educations from '@/components/educations/Educations'
import Experiences from '@/components/experiences/Experiences'
import { getResumeData } from '@/lib/api'
import styles from '@/components/resume/Resume.module.css'

const Resume = async () => {
  const {
    basics,
    basics: { label, summary },
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
        <Infos {...basics} />
        <Skills skills={skills} />
      </section>
    </main>
  )
}

export default Resume
