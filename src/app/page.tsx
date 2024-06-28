import Resume from '@/components/resume/Resume'
import structure from '@/resume.json'

// == TypeScript ==
import type { Metadata } from 'next'
import type { Structure } from '@/type'

const {
  basics: { label, firstname, lastname }
} = structure satisfies Structure

export const metadata: Metadata = {
  title: `${firstname} ${lastname} - ${label}`,
  description: 'manifest.json',
  keywords: ['javascript', 'typescript', 'react', 'php', 'mysql'],
  manifest: 'manifest.json',
  icons: { icon: './favicon.ico' }
}

export default Resume
