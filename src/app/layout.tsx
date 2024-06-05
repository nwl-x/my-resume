import { FC, PropsWithChildren } from 'react'
import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import 'normalize.css'
import '@/app/globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '400'], display: 'auto' })

export const metadata: Metadata = {
  title: 'Jérôme GUNST - Fullstack JavaScript developer',
  description: 'Une brève histoire de ma life',
  manifest: './manifest.json',
  icons: { icon: './favicon.png' }
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="fr" className={roboto.className}>
    <body className={roboto.className}>{children}</body>
  </html>
)

export default RootLayout
