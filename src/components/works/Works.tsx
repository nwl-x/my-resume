import Work from '@/components/works/Work'

// == TypeScript ==
import type { WorksProps } from '@/type'

// == CSS ==
import styles from '@/components/works/works.module.css'

const Works: React.FC<WorksProps> = ({ works, label }) => (
  <>
    <h2>{label}</h2>

    <article className={styles.works}>
      {works.map((work, key) => (
        <Work key={key} {...work} />
      ))}
    </article>
  </>
)

export default Works
