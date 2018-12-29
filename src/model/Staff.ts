import { Human } from '../interface/Human'

export default class Staff implements Human {
  name: string
  profile: string
  salary: number
  isActive: boolean
  setData(name: string, profile: string) {
    this.name = name
    this.profile = profile
    this.isActive = true
  }
}