import { FC } from 'react'
import Info from '@/components/infos/Info'
import ImgBase64 from '@/components/ImgBase64'
import formatInfos from '@/formaters/formatInfos'
import styles from '@/components/infos/infos.module.css'
import type { InfosProps } from '@/type'

const Infos: FC<InfosProps> = async ({ image, fullname, infos }) => (
  <section className={styles.infos}>
    <article>
      <ImgBase64 url={image} className={styles.avatar} />
    </article>

    <h2>{fullname}</h2>

    {formatInfos(infos).map((info, key) => (
      <Info key={key} {...info} />
    ))}
  </section>
)

export default Infos
