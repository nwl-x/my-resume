import { FC } from 'react'
import Experience from '@/components/experiences/Experience'
import type { Experience as ExperienceType } from '@/type'

const Experiences: FC<{ works: ExperienceType[] }> = ({ works }) => (
  <article>
    <h2>Expériences</h2>

    {works.map((experience, key) => (
      <Experience key={key} {...experience} />
    ))}
  </article>
)

export default Experiences
