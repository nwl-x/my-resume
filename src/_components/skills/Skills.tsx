import Skill from '@/components/skills/Skill'

// == TypeScript ==
import type { Skill as SkillType } from '@/type'

// == CSS ==
import styles from '@/components/skills/Skills.module.css'

const Skills: React.FC<{ skills: SkillType[] }> = ({ skills }) => (
  <article className={styles.skills}>
    {skills.map((skill, key) => (
      <Skill key={key} {...skill} />
    ))}
  </article>
)

export default Skills
