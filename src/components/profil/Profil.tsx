import { FC } from 'react'
import type { ProfilProps } from '@/type'
import styles from '@/components/profil/profil.module.css'

const Profil: FC<ProfilProps> = async ({ label, summary }) => (
  <section className={styles.profil}>
    <h1>{label}</h1>

    <article className={styles.summary}>{summary}</article>
  </section>
)

export default Profil
