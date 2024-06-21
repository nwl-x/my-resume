import type { ComponentType } from 'react'
import type { IconProps } from 'react-bootstrap-icons'

export type Basics = {
  label: string
  firstname: string
  lastname: string
  image: string
  email: string
  phone: string
  url: string
  summary: string
  location: {
    address: string
    zip: string
    city: string
    country: string
    countryCode: string
    url: string
  }
  profiles: {
    network: string
    url: string
  }[]
}

export type Work = {
  company: string
  image: string
  location: string
  description: string
  position: string
  url: string
  startDate: string
  endDate: string
  summary: string
  realizations: string[]
  highlights: string[]
}

export type Volunteer = {
  organization: string
  position: string
  url: string
  startDate: string
  endDate: string
  summary: string
  highlights: string[]
}

export type Education = {
  institution: string
  url: string
  area: string
  description: string
  studyType: string
  startDate: string
  endDate: string
  image: string
}

export type Awards = {
  title: string
  date: string
  awarder: string
  summary: string
}

export type Publications = {
  name: string
  publisher: string
  releaseDate: string
  url: string
  summary: string
}

export type Skill = {
  name: string
  data: {
    name: string
    url?: string
    level: number
  }[]
}

export type Languages = {
  language: string
  fluency: string
}

export type Interests = {
  name: string
  keywords: string[]
}

export type References = {
  name: string
  reference: string
}

export type Projects = {
  name: string
  description: string
  highlights: string[]
  keywords: string[]
  startDate: string
  endDate: string
  url: string
  roles: string[]
  entity: string
  type: string
}

export type Structure = {
  labels: {
    education: string
    works: string
    skills: string
  }
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
  summary: string
}

export type WorksProps = {
  label: string
  works: Work[]
}

export type EducationsProps = {
  label: string
  educations: Education[]
}

// == Misc ==

export type FormatBasicsProps = Omit<Basics, 'label' | 'firstname' | 'lastname' | 'image' | 'summary'>

export type BasicsFormatted = {
  icon: ComponentType<IconProps>
  url: string
  texts: string[]
}
