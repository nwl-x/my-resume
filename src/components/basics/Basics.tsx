import { FC } from 'react'

import Basic from '@/components/basics/Basic'
import ImgBase64 from '@/components/ImgBase64'

import formatBasics from '@/formaters/formatBasics'

// == TypeScript ==
import type { Basics } from '@/type'

const Basics: FC<Basics> = ({ image, firstname, lastname, email, phone, location, profiles, label, summary }) => (
  <section className="items-center">
    <article className="flex items-center justify-center">
      <ImgBase64 url={image} className="inline-block h-32 w-32 rounded-full bg-white" />
    </article>

    <h2 className="mb-5 text-center text-2xl font-bold">
      {firstname} {lastname}
    </h2>

    <article className="relative mb-3 rounded-xl bg-white p-3 text-sm text-black">
      <div className="clip-bubble -h-[20px] absolute -top-[20px] left-[25px] w-[20px] bg-slate-100 before:absolute before:h-[20px] before:w-[20px] before:bg-white"></div>
      {summary}
    </article>

    <h2 className="mb-3 mt-3 text-xl">{label}</h2>

    <article className="grid gap-[0.2em]">
      {formatBasics({ email, phone, location, profiles }).map((basic, key) => (
        <Basic key={key} {...basic} />
      ))}
    </article>
  </section>
)

export default Basics
