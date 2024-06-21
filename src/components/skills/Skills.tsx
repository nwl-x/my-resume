import Skill from '@/components/skills/Skill'

// == TypeScript ==
import type { SkillsProps } from '@/type'

// == CSS ==
import styles from '@/components/skills/skills.module.css'

const Skills: React.FC<SkillsProps> = ({ skills, label }) => (
  <>
    <h2>{label}</h2>

    <article className={styles.skills}>
      {skills.map((skill, key) => (
        <Skill key={key} {...skill} />
      ))}
    </article>
  </>
)

export default Skills
