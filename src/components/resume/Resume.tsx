import Basics from '@/components/basics/Basics'
import Skills from '@/components/skills/Skills'
import Profil from '@/components/profil/Profil'
import Works from '@/components/works/Works'
import Educations from '@/components/educations/Educations'

// == Do: Load Datas From JSON ==
import { getResumeDataFromJson as getResume } from '@/lib/api'

// == Or: Load Datas From Database ==
// import { getResumeFromDb as getResume } from '@/lib/api'

// == CSS ==
import styles from '@/components/resume/resume.module.css'

const Resume = async () => {
  const {
    labels,
    basics,
    basics: { label, summary },
    work = [],
    education = [],
    skills = []
  } = await getResume()

  return (
    <>
      <main className={styles.main}>
        <aside className={styles.sidebar}>
          <Basics {...basics} />
          <Skills skills={skills} label={labels.skills} />
        </aside>

        <section className={styles.content}>
          <Profil label={label} summary={summary} />
          <Works works={work} label={labels.works} />
          <Educations educations={education} label={labels.education} />
        </section>
      </main>
    </>
  )
}

export default Resume
