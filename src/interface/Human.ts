export interface Human {
  name: string
  profile: string
  salary: number
  setData(name: string, profile: string): void
}

export abstract class HumanAbstruct {
  abstract name: string
  abstract profile: string
  abstract salary: number
  abstract setData(name: string, profile: string): void
}