import Experience from '@/components/experiences/Experience'

// == TypeScript ==
import type { Experience as ExperienceType } from '@/type'

const Experiences: React.FC<{ works: ExperienceType[]; label: string }> = ({ works, label }) => (
  <article>
    <h2>{label}</h2>

    {works.map((experience, key) => (
      <Experience key={key} {...experience} />
    ))}
  </article>
)

export default Experiences
