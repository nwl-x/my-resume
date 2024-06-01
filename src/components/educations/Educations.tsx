import { FC } from 'react'
import Education from '@/components/educations/Education'
import type { Education as EducationType } from '@/type'

const Educations: FC<{ educations: EducationType[] }> = ({ educations }) => (
  <article>
    <h2>Formations</h2>

    {educations.map((education, key) => (
      <Education key={key} {...education} />
    ))}
  </article>
)

export default Educations
