import { FC } from 'react'

import formatDuration from '@/formaters/formatDuration'

// == TypeScript ==
import type { Education as EducationType } from '@/type'

const Education: FC<EducationType> = ({ institution, description, startDate, endDate }) => (
  <article className="border-b-2 border-green pb-2 text-sm last:border-0">
    <span className="inline-block align-middle">{institution}</span>
    <span className="inline-block align-middle text-[0.7rem]">({formatDuration(startDate, endDate)})</span>

    <section>{description}</section>
  </article>
)

export default Education
