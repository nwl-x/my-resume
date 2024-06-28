import { FC } from 'react'

import Skill from '@/components/skills/Skill'

// == TypeScript ==
import type { SkillsProps } from '@/type'

const Skills: FC<SkillsProps> = ({ skills, label }) => (
  <>
    <h2 className="mb-0 mt-3 text-xl">{label}</h2>

    <article>
      {skills.map((skill, key) => (
        <Skill key={key} {...skill} />
      ))}
    </article>
  </>
)

export default Skills
