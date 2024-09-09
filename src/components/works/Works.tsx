import { FC } from 'react'

import Work from '@/components/works/Work'

// == TypeScript ==
import type { WorksProps } from '@/type'

const Works: FC<WorksProps> = ({ works }) => (
  <article className="grid gap-1">
    {works.map((work, key) => (
      <Work key={key} {...work} />
    ))}
  </article>
)

export default Works
