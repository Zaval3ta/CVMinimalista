export interface CV {
  basics: Basics
  work: Array<Work>
  education: Array<Education>
  skills: Array<Skills>
  languages: Array<Languages>
  projects: Array<Projects>
}

interface Basics {
  name: string
  label: string
  image: string
  email: string
  phone: string
  url: string
  summary: string
  location: Location
  profiles: Array<Profiles>
}

interface Location {
  address: string
  postalCode: string
  city: string
  countryCode: string
  region: string
}

interface Profiles {
  network: string
  username: string
  url: string
}

interface Work {
  name: string
  position: string
  url: string
  startDate: DateStr
  endDate: DateStr | null
  summary: string
  summary2: string
  summary3: string
}

type DateStr = `${string}-${string}-${string}`

interface Skills {
  name: string
  keywords: Array<string>
}

interface Awards {
  title: string
  date: string
  awarder: string
  summary: string
}

interface Education {
  institution: string
  area: string
  startDate: DateStr
  endDate: DateStr
}

interface Languages {
  language: Language
  fluency: string
}

type Language =
  "Spanish"
  | "English"
  | string

interface Projects {
  name: string
  isActive: boolean
  description: string
  highlights: Highlight
  url: string
  github?: string
}
type Highlight = Array<String>
