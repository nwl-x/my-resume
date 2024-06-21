import splitArray from '@/utils/splitArray'

// == TypeScript ==
import type { Skill as SkillType } from '@/type'

const Skill: React.FC<SkillType> = ({ name, data }) => (
  <>
    <h3>{name}</h3>

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
