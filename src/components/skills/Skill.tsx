import { FC } from 'react'

// == TypeScript ==
import type { Skill as SkillType } from '@/type'

const Skill: FC<SkillType> = ({ name, data }) => (
  <>
    <h3 className="mb-2 mt-2 border-b-2 border-green pb-[0.1rem]">{name}</h3>

    <section className="flex flex-wrap gap-2">
      <ul className="w-full">
        {data.map(({ name, url }, key) => (
          <li key={key} className="inline-flex w-1/2 before:mr-1 before:text-green before:content-['\2022']">
            <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-green">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  </>
)

export default Skill
