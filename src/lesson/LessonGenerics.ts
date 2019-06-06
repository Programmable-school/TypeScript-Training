/* ジェネリクス */
export function lessonGenerics() {
  const staff = new Staff()
  staff.configure('大学生A', 'イベントのスタッフです。')
  const manager = new Manager()
  manager.configure('社員A', 'イベントのマネージャーです。')
  manager.companyName = 'Company Inc.'
  console.log('スタッフのプロフィール', staff.name, staff.profile)
  console.log('マネージャーのプロフィール', manager.name, manager.profile)
  
  // 給料を支払う
  let company = new Company()
  company.salaryPay(staff)
  company.salaryPay(manager)
  console.log('スタッフの給料', staff.salary)
  console.log('マネージャーの給料', manager.salary)
}


interface Human {
  name: string
  profile: string
  salary: number
  configure(name: string, profile: string): void
}

class Staff implements Human {
  name: string
  profile: string
  salary: number
  isActive: boolean
  configure(name: string, profile: string) {
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
  configure(name: string, profile: string) {
    this.name = name
    this.profile = profile
  }
}

class Company {

  // ジェネリクス　Humanを継承するクラスを許容する
  salaryPay<T extends Human>(employee: T) {
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