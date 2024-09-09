import { FC } from 'react'

import Basic from '@/components/basics/Basic'
import ImgBase64 from '@/components/ImgBase64'

import formatBasics from '@/formaters/formatBasics'

// == TypeScript ==
import type { Basics } from '@/type'

// const Basics: FC<Basics> = ({ image, firstname, lastname, email, phone, location, profiles, label, summary }) => (
const Basics: FC<Basics> = ({ image, firstname, lastname, email, phone, location, profiles, summary }) => (
  <section className="items-center">
    <article className="flex items-center justify-center">
      {/* Avatar */}
      <ImgBase64 url={image} className="inline-block h-32 w-32 rounded-full bg-white" />
    </article>

    <h2 className="mb-3 text-center text-2xl font-bold">
      {firstname} {lastname}
    </h2>

    {/* contact */}
    <article className="mb-3 grid gap-[0.2em]">
      {formatBasics({ email, phone, location, profiles }).map((basic, key) => (
        <Basic key={key} {...basic} />
      ))}
    </article>

    {/* Testimonial */}
    <article className="relative mb-3 rounded-xl bg-white p-3 text-sm text-black">{summary}</article>
  </section>
)

export default Basics
