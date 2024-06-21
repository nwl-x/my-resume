// == TypeScript ==
import type { ProfilProps } from '@/type'

// == CSS ==
import styles from '@/components/profil/profil.module.css'

const Profil: React.FC<ProfilProps> = ({ label, summary }) => (
  <section className={styles.profil}>
    <h1>{label}</h1>

    <article className={styles.summary}>{summary}</article>
  </section>
)

export default Profil
