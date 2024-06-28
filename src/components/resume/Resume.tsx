import Basics from '@/components/basics/Basics'
import Skills from '@/components/skills/Skills'
import Profil from '@/components/profil/Profil'
import Works from '@/components/works/Works'
import Educations from '@/components/educations/Educations'

// == Do: Load Datas From JSON ==
// import { getResumeDataFromJson as getResume } from '@/lib/api'

// == Or: Load Datas From Database ==
import { getResumeFromMongoDB as getResume } from '@/lib/api'

const Resume = async () => {
  const resume = await getResume()
  const { labels, basics, work = [], education = [], skills = [] } = resume

  return (
    <>
      <div className="hidden">{JSON.stringify(resume)}</div>

      <main className="flex h-48 min-h-[29.7cm] min-w-[21cm] font-display">
        <aside className="h-full w-56 bg-blue p-4 text-sm text-white">
          <Basics {...basics} label={labels.contact} />
          <Skills skills={skills} label={labels.skills} />
        </aside>

        <section className="flex-1 p-3 text-black">
          <Profil label={basics.label} />
          <Works works={work} label={labels.works} />
          <Educations educations={education} label={labels.education} />
        </section>
      </main>
    </>
  )
}

export default Resume
