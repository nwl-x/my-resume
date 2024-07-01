import { FC } from 'react'

import { Link } from 'react-bootstrap-icons'

import ImgBase64 from '@/components/ImgBase64'
import formatDuration from '@/formaters/formatDuration'

// == TypeScript ==
import type { Work } from '@/type'

const Work: FC<Work> = ({ company, image, description, position, url, startDate, endDate, realizations }) => (
  <article className="border-b-2 border-green pb-2 text-sm last:border-0">
    <section>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:text-blue hover:underline">
        <ImgBase64 url={image} className="mr-2 inline-block h-4 w-4 align-middle" />

        <span className="inline-block align-middle">{company}</span>

        <Link className="ml-1 mr-1 hidden align-middle text-[0.78rem] md:inline-block" />

        <span className="hidden align-middle text-[0.7rem] md:inline-block">({description})</span>
      </a>
    </section>

    <section className="items-center align-middle md:flex">
      <p className="mr-1 text-blue md:text-xl">{position}</p>
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
