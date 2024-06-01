import { FC } from 'react'
import splitArray from '@/utils/splitArray'
import type { Skill as SkillType } from '@/type'

const Skill: FC<SkillType> = ({ name, data }) => (
  <>
    <h4>{name}</h4>

    <section>
      {splitArray(data).map((items, key) => (
        <ul key={key}>
          {items.map(({ name, url }, key) => (
            <li key={key}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </li>
          ))}
        </ul>
      ))}
    </section>
  </>
)

export default Skill
