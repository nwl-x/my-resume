import Work from '@/components/works/Work'

// == TypeScript ==
import type { WorksProps } from '@/type'

const Works: React.FC<WorksProps> = ({ works, label }) => (
  <article>
    <h2>{label}</h2>

    {works.map((work, key) => (
      <Work key={key} {...work} />
    ))}
  </article>
)

export default Works
