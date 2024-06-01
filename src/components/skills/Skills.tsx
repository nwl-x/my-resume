import { FC } from 'react'
import Skill from '@/components/skills/Skill'
import styles from '@/components/skills/skills.module.css'
import type { Skill as SkillType } from '@/type'

const Skills: FC<{ skills: SkillType[] }> = async ({ skills }) => (
  <article className={styles.skills}>
    <h3>Compétences</h3>

    {skills.map((skill, key) => (
      <Skill key={key} {...skill} />
    ))}
  </article>
)

export default Skills
