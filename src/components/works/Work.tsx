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

        <Link className="ml-1 mr-1 inline-block align-middle text-[0.78rem]" />

        <span className="inline-block align-middle text-[0.7rem]">({description})</span>
      </a>
    </section>

    <section className="flex items-center align-middle">
      <span className="mr-1 text-xl text-blue">{position}</span>
      <span className="text-[0.7rem]">- ({formatDuration(startDate, endDate)})</span>
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
