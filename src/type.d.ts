import type { ComponentType } from 'react'
import type { IconProps } from 'react-bootstrap-icons'

export type location = {
  address: string
  city: string
  country: string
  countryCode: string
  url: string
  zip: string
}

export type Profiles = {
  network: string
  url: string
}

export type Basics = {
  email: string
  firstname: string
  image: string
  label: string
  lastname: string
  location: location
  phone: string
  profiles: Profiles[]
  summary: string
}

export type Work = {
  company: string
  description: string
  endDate: string
  highlights: string[]
  image: string
  location: string
  position: string
  realizations: string[]
  startDate: string
  summary: string
  url: string
}

export type Volunteer = {
  endDate: string
  highlights: string[]
  organization: string
  position: string
  startDate: string
  summary: string
  url: string
}

export type Education = {
  area: string
  description: string
  endDate: string
  image: string
  institution: string
  startDate: string
  studyType: string
  url: string
}

export type Awards = {
  awarder: string
  date: string
  summary: string
  title: string
}

export type Publications = {
  name: string
  publisher: string
  releaseDate: string
  summary: string
  url: string
}

export type SkillData = {
  level: number
  name: string
  url?: string
}

export type Skill = {
  name: string
  data: SkillData[]
}

export type Languages = {
  fluency: string
  language: string
}

export type Interests = {
  keywords: string[]
  name: string
}

export type References = {
  name: string
  reference: string
}

export type Projects = {
  description: string
  endDate: string
  entity: string
  highlights: string[]
  keywords: string[]
  name: string
  roles: string[]
  startDate: string
  type: string
  url: string
}

export type Labels = {
  contact: string
  education: string
  skills: string
  works: string
}

export type Structure = {
  labels: Labels
  basics: Basics
  work: Work[]
  volunteer: Volunteer[]
  education: Education[]
  awards: Awards[]
  publications: Publications[]
  skills: Skill[]
  languages: Languages[]
  interests: Interests[]
  references: References[]
  projects: Projects[]
}

// == Components Props ==

export type SkillsProps = {
  label: string
  skills: Skill[]
}

export type ProfilProps = {
  label: string
}

export type WorksProps = {
  label: string
  works: Work[]
}

export type EducationsProps = {
  educations: Education[]
  label: string
}

// == Misc ==

export type FormatBasicsProps = Omit<Basics, 'firstname' | 'image' | 'label' | 'lastname' | 'summary'>

export type BasicsFormatted = {
  icon: ComponentType<IconProps> | null
  texts: string[]
  url: string
}
