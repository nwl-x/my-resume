import { FC } from 'react'

// == TypeScript ==
import type { ProfilProps } from '@/type'

const Profil: FC<ProfilProps> = ({ label }) => (
  // Titre
  <section className="pb-5 pt-5 text-center text-2xl font-bold tracking-wider text-white md:block md:text-4xl">
    <h1>{label}</h1>
  </section>
)

export default Profil
