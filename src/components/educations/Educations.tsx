import Education from '@/components/educations/Education'

// == TypeScript ==
import type { EducationsProps } from '@/type'

const Educations: React.FC<EducationsProps> = ({ label, educations }) => (
  <article>
    <h2>{label}</h2>

    {educations.map((education, key) => (
      <Education key={key} {...education} />
    ))}
  </article>
)

export default Educations
