import { Human } from '../interface/Human'
import Staff from '../model/Staff'

export default class Manager implements Human {
  name: string
  profile: string
  companyName: string
  salary: number
  setData(name: string, profile: string) {
    this.name = name
    this.profile = profile
  }
  breakStaff(staff: Staff) {
    staff.isActive = false
  }
}