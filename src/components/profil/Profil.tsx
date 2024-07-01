import { FC } from 'react'

// == TypeScript ==
import type { ProfilProps } from '@/type'

const Profil: FC<ProfilProps> = ({ label }) => (
  <section className="mb-2 mt-2 text-center text-lg font-bold md:block md:text-3xl">
    <h1>{label}</h1>
  </section>
)

export default Profil
