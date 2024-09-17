import Basics from '@/components/basics/Basics'
import Skills from '@/components/skills/Skills'
import Profil from '@/components/profil/Profil'
import Works from '@/components/works/Works'
// import Educations from '@/components/educations/Educations'

// == Do: Load Datas From JSON ==
// import { getResumeDataFromJson as getResume } from '@/lib/api'

// == Or: Load Datas From Database ==
import { getResumeFromMongoDB as getResume } from '@/lib/api'

const Resume = async () => {
  const resume = await getResume()
  const { labels, basics, work = [], skills = [] } = resume
  const profil = <Profil label={basics.label} />

  return (
    <>
      {/* mots clés */}
      <div className="hidden">{JSON.stringify(resume)}</div>

      <main className="h-48 min-h-[29.7cm] bg-slate-500 font-display md:flex md:min-w-[21cm]">
        {/* Sidebar */}
        <aside className="h-full p-4 text-sm text-white md:w-56">
          {/* Titre responsive */}
          <section className="md:hidden">{profil}</section>
          {/* Avatar et contact */}
          <Basics {...basics} label={labels.contact} />

          {/* Compétences */}
          <Skills skills={skills} label={labels.skills} />
        </aside>

        {/* Content */}
        <section className="pb-0 pt-0 text-black md:flex-1">
          {/* Titre responsive */}
          <section className="hidden bg-slate-500 md:block">{profil}</section>

          {/* Expériences */}
          <Works works={work} label={labels.works} />

          {/* Formation */}
          {/* <Educations educations={education} label={labels.education} /> */}
        </section>
      </main>
    </>
  )
}

export default Resume
