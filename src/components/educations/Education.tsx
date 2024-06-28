import { FC } from 'react'

import { Link } from 'react-bootstrap-icons'

import ImgBase64 from '@/components/ImgBase64'
import formatDuration from '@/formaters/formatDuration'

// == TypeScript ==
import type { Education as EducationType } from '@/type'

const Education: FC<EducationType> = ({ institution, description, url, image, startDate, endDate }) => (
  <article className="border-b-2 border-green pb-2 text-sm last:border-0">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <ImgBase64 url={image} className="mr-2 inline-block h-4 w-4 align-middle" />

      <span className="inline-block align-middle">{institution}</span>

      <Link className="ml-1 mr-1 inline-block align-middle text-[0.78rem]" />

      <span className="inline-block align-middle text-[0.7rem]">({formatDuration(startDate, endDate)})</span>
    </a>

    <section>{description}</section>
  </article>
)

export default Education
