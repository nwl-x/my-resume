import { FC } from 'react'

import formatDuration from '@/formaters/formatDuration'

// == TypeScript ==
import type { Work } from '@/type'

const Work: FC<Work> = ({ company, position, startDate, endDate, realizations }) => (
  <article className="border-b-2 border-slate-100 pb-2 text-sm last:border-0">
    <section className="items-center align-middle md:flex">
      <p className="mr-1 text-slate-900 md:text-xl">{position}</p>
      <span className="inline-block align-middle">{company}</span>
      <p className="text-[0.7rem] md:ml-1">({formatDuration(startDate, endDate)})</p>
    </section>

    <section className="flex flex-wrap gap-2">
      <ul className="w-full">
        {realizations.map((item, key) => (
          <li
            key={key}
            className="flex before:mr-1 before:text-xl before:leading-none before:text-blue before:content-['\2022']">
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  </article>
)

export default Work
