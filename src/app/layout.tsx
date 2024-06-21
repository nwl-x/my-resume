import { Roboto } from 'next/font/google'
import structure from '@/resume.json'

// == TypeScript ==
import type { Metadata } from 'next'
import type { Structure } from '@/type'

// == CSS ==
import '@/app/globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '400'], display: 'auto' })

const {
  basics: { label, firstname, lastname }
} = structure satisfies Structure

export const metadata: Metadata = {
  title: `${firstname} ${lastname} - ${label}`,
  manifest: 'manifest.json'
}

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="fr">
    <body className={roboto.className}>{children}</body>
  </html>
)

export default RootLayout
