import { Human, HumanAbstruct } from './interface/Human'
import Staff from './model/Staff'
import Manager from './model/Manager'
import SalaryController from './controller/SalaryController'

/* Lesson_1 Hello! World.を表示 */
console.log('---- Lesson 1 ----')
console.log('Hello! world.')
console.log('------------------')
console.log('')

/* Lesson_2 変数 */
console.log('---- Lesson 2 ----')
let count: number = 1
count += 1

let message: String = ``
message = `Lesson ${count}`
console.log(message)
console.log('------------------')
console.log('')


/* Lesson_XXX ジェネリクス */
console.log('---- Lesson XXX ----')
const staff = new Staff()
staff.setData('大学生A', 'イベントのスタッフです。')
const manager = new Manager()
manager.setData('社員A', 'イベントのマネージャーです。')
manager.companyName = 'Company Inc.'
console.log('スタッフのプロフィール', staff.name, staff.profile)
console.log('マネージャーのプロフィール', manager.name, manager.profile)

// 給料を支払う
const salaryController: SalaryController = new SalaryController()
salaryController.salalyPay(staff)
salaryController.salalyPay(manager)
console.log('スタッフの給料', staff.salary)
console.log('マネージャーの給料', manager.salary)

// マネージャーがスタッフを休憩させる
console.log('スタッフの活動フラグ', staff.isActive, '==', staff.isActive == true ? '活動中': '休憩なう')
manager.breakStaff(staff)
console.log('スタッフの活動フラグ', staff.isActive, '==', staff.isActive == true ? '活動中': '休憩なう')
console.log('------------------')
console.log('')
