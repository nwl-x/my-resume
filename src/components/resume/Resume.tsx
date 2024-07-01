/* eslint-disable @next/next/no-img-element */
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

      <main className="h-48 min-h-[29.7cm] font-display md:flex md:min-w-[21cm]">
        <aside className="h-full bg-blue p-4 text-sm text-white md:w-56">
          <section className="md:hidden">
            <Profil label={basics.label} />
          </section>

          <Basics {...basics} label={labels.contact} />
          <Skills skills={skills} label={labels.skills} />
        </aside>

        <section className="p-3 text-black md:flex-1">
          <section className="hidden md:block">
            <Profil label={basics.label} />
          </section>
          <Works works={work} label={labels.works} />
          <Educations educations={education} label={labels.education} />
        </section>
      </main>
    </>
  )
}

export default Resume
