import Education from '@/components/educations/Education'

// == TypeScript ==
import type { Education as EducationType } from '@/type'

const Educations: React.FC<{ educations: EducationType[]; label: string }> = ({ educations, label }) => (
  <article>
    <h2>{label}</h2>

    {educations.map((education, key) => (
      <Education key={key} {...education} />
    ))}
  </article>
)

export default Educations
