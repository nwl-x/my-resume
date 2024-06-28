import { FC } from 'react'

import Work from '@/components/works/Work'

// == TypeScript ==
import type { WorksProps } from '@/type'

const Works: FC<WorksProps> = ({ works, label }) => (
  <>
    <h2 className="mb-3 mt-3 text-2xl">{label}</h2>

    <article className="grid gap-3">
      {works.map((work, key) => (
        <Work key={key} {...work} />
      ))}
    </article>
  </>
)

export default Works
