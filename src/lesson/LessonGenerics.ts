/* ジェネリクス */
export function lessonGenerics() {
  const staff = new Staff()
  staff.setData('大学生A', 'イベントのスタッフです。')
  const manager = new Manager()
  manager.setData('社員A', 'イベントのマネージャーです。')
  manager.companyName = 'Company Inc.'
  console.log('スタッフのプロフィール', staff.name, staff.profile)
  console.log('マネージャーのプロフィール', manager.name, manager.profile)
  
  // 給料を支払う
  salalyPay(staff)
  salalyPay(manager)
  console.log('スタッフの給料', staff.salary)
  console.log('マネージャーの給料', manager.salary)
  
  // マネージャーがスタッフを休憩させる
  console.log('スタッフの活動フラグ', staff.isActive, '==', staff.isActive == true ? '活動中': '休憩なう')
  manager.breakStaff(staff)
  console.log('スタッフの活動フラグ', staff.isActive, '==', staff.isActive == true ? '活動中': '休憩なう')
}

// ジェネリクス　Humanを継承するクラスを許容する
function salalyPay<T extends Human>(employee: T) {
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

interface Human {
  name: string
  profile: string
  salary: number
  setData(name: string, profile: string): void
}

class Staff implements Human {
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

class Manager implements Human {
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