'use client'

import { useEffect, useState } from 'react'
import imgUrlToBase64 from '@/utils/imgUrlToBase64'

const ImgBase64 = ({ url, className }: Record<string, string>) => {
  const [base64, setBase64] = useState<FileReader['result'] | null>(null)

  useEffect(() => {
    imgUrlToBase64(url).then((result) => setBase64(result))
  }, [url])

  return <img src={base64 as string} className={className} alt={url} title={url} />
}

export default ImgBase64
