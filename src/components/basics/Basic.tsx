import { FC } from 'react'

// == TypeScript ==
import type { BasicsFormatted } from '@/type'

const Basic: FC<BasicsFormatted> = ({ icon: Icon, url, texts }) => {
  const content = (
    <>
      <section className="mr-2 mt-1 h-4 w-4">{Icon && <Icon />}</section>

      <section>
        {texts.map((text, key) => (
          <p key={key}>{text}</p>
        ))}
      </section>
    </>
  )

  return (
    <section className="flex hover:text-green">
      {url ? (
        <a href={url} target="_blank" rel="noreferrer" className="flex">
          {content}
        </a>
      ) : (
        content
      )}
    </section>
  )
}

export default Basic
