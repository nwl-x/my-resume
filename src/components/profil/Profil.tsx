import { FC } from 'react'

// == TypeScript ==
import type { ProfilProps } from '@/type'

const Profil: FC<ProfilProps> = ({ label }) => (
  <section>
    <h1 className="mb-2 mt-2 text-center text-3xl font-bold">{label}</h1>
  </section>
)

export default Profil
