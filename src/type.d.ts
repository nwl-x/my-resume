import { ComponentType } from 'react'
import { IconProps } from 'react-bootstrap-icons'

export type ProfilProps = {
  label: string
  summary: string
}

export type InfosProps = {
  image: string
  firstname: string
  lastname: string
  email: string
  phone: string
  url: string
  location: {
    address: string
    zip: string
    city: string
    url: string
  }
  profiles: {
    network: string
    url: string
  }[]
}

export type FormatInfosProps = Omit<InfosProps, 'image', 'firstname', 'lastname'>

export type InfosFormatted = {
  icon: ComponentType<IconProps>
  url: string
  texts: string[]
}

export type SkillData = {
  name: string
  url?: string
  level: number
}

export type Skill = {
  name: string
  data: SkillData[]
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

type Experience = {
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
