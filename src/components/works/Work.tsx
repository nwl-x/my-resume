import { FC } from 'react'

import ImgBase64 from '@/components/ImgBase64'
import formatDuration from '@/formaters/formatDuration'

// == TypeScript ==
import type { Work } from '@/type'

const Work: FC<Work> = ({ company, image, position, startDate, endDate, realizations }) => (
  <article className="border-1 mb-1 rounded-xl rounded-r-none bg-white pb-2 pl-3 text-sm">
    {/* Poste */}
    <section className="mt-2 items-center align-middle md:flex">
      <p className="mr-1 text-slate-500 md:text-xl">{position}</p>
    </section>

    {/* Entreprise */}
    <section>
      <ImgBase64 url={image} className="mr-2 inline-block h-4 w-4 align-middle" />
      <span className="inline-block align-middle">{company}</span>
      <span className="text-[0.7rem] md:ml-1">({formatDuration(startDate, endDate)})</span>
    </section>

    {/* Realisation */}
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
