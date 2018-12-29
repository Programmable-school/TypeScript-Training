import { Human } from '../interface/Human'
import Staff from '../model/Staff'
import Manager from '../model/Manager'

export default class SalaryController {
  salalyPay<T extends Human>(employee: T) {
    if (employee instanceof Staff) {
      /* employeeがStaffの場合は20万を設定 */
      console.log('OK, I will be pay salary to Staff.')
      employee.salary = 200_000

      /* Staffの固有情報を確認する場合はキャスト変換する */
      const staff: Staff = employee as Staff
      console.log('スタッフの活動フラグ', staff.isActive)
    }
    if (employee instanceof Manager) {
      /* employeeがManagerの場合は50万を設定 */
      console.log('OK, I will be pay salary to Manager.')
      employee.salary = 500_000

      /* Managerの固有情報を確認する場合はキャスト変換する */
      const manager: Manager = employee as Manager
      console.log('マネージャーの会社名', manager.companyName)
    }
  }
}