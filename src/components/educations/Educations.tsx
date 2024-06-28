import { FC } from 'react'

import Education from '@/components/educations/Education'

// == TypeScript ==
import type { EducationsProps } from '@/type'

const Educations: FC<EducationsProps> = ({ label, educations }) => (
  <article>
    <h2 className="mb-2 mt-0 text-2xl">{label}</h2>

    <article className="grid gap-3">
      {educations.map((education, key) => (
        <Education key={key} {...education} />
      ))}
    </article>
  </article>
)

export default Educations
