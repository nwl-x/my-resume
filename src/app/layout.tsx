import { FC, PropsWithChildren } from 'react'
import { Roboto, Open_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import 'normalize.css'
import '@/app/globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Jérôme GUNST - Fullstack JavaScript developer',
  description: 'Une brève histoire de ma life',
  manifest: '/manifest.json',
  icons: { icon: '/favicon.png' }
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="fr">
    <body className={openSans.className}>{children}</body>
  </html>
)

export default RootLayout
