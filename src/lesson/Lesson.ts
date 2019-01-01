import Staff from '../model/Staff'
import Manager from '../model/Manager'
import SalaryController from '../controller/SalaryController'

/* Lesson_1 Hello! World.を表示 */
export function Lesson1() {
  console.log('Hello! world.')
}

/* Lesson_2 変数と定数 */
export function Lesson2() {
  // 変数
  let count: number = 1
  count += 1
  
  let message: String = ``
  message = `Lesson ${count}`
  console.log('変数', message)

  // 定数
  const name: string = '山田太郎' // 以降, name = '山田花子' と代入することはできない
  console.log('定数', name)
}

/* Lesson_3 Any型 */
export function Lesson3() {
  let variable: any
  variable = 1
  console.log('number', variable)

  variable = '文字列'
  console.log('string', variable)

  variable = false
  console.log('boolean', variable)

  variable = new Date()
  console.log('class', variable)
}

/* Lesson_4 Optional型 */
export function Lesson4(name: string, profile?: string): string {
  if (!profile) {
    return `profileが${profile}です。`
  }
  return name + 'は' + profile
}

/* Lesson_5 演算子 */
export function Lesson5() {
  let variable: number = 1
  const resultA: number = variable + 2
  const resultB: number = variable * 2
  const resultC: number = variable / 2
  console.log('resultA', resultA)
  console.log('resultB', resultB)
  console.log('resultC', resultC)

  let resultD: number = 1
  resultD += 2
  let resultE: number = 1
  resultE *= 2
  let resultF: number = 1
  resultF /= 2
  console.log('resultD', resultD)
  console.log('resultE', resultE)
  console.log('resultF', resultF)
}

/* Lesson_6 if分 */
export function Lesson6() {
  let variable: number = 1
  if (variable === 1) {
    console.log(`Case ${variable}`, 'variableは1です。')
  } else {
    console.log(`Case ${variable}`, 'variableは1以外ですです。')
  }

  variable = 2
  if (variable === 1) {
    console.log(`Case ${variable}`, 'variableは1です。' )
  } else {
    console.log(`Case ${variable}`, 'variableは1以外です。')
  }
  
  variable = 3
  if (variable === 1) {
    console.log(`Case ${variable}`, 'variableは1です。' )
  } else if (variable == 3) {
    console.log(`Case ${variable}`, 'variableは3です。' )
  } else {
    console.log(`Case ${variable}`, 'variableは0以外です。')
  }
}
/* Lesson_7 比較演算子 */
export function Lesson7() {
  let variable: number = 1
  
  if (variable === 1) {
    console.log('Case ===', 'variableは1です。')
  }

  if (variable !== 1) {
    console.log('Case ===', 'variableは1以外です。')
  }

  if (variable > 1) {
    console.log('Case >', 'variableは1以上です。')
  } else {
    console.log('Case >', 'variableは1含め1以下です。')
  }
  if (variable >= 1) {
    console.log('Case >=', 'variableは1含め1以上です。')
  } else {
    console.log('Case >=', 'variableは1以下です。')
  }

  if (variable < 1) {
    console.log('Case <', 'variableは1以下です。')
  } else {
    console.log('Case <', 'variableは1含め1以上です。')
  }
  if (variable <= 1) {
    console.log('Case <=', 'variableは1含め1以下です。')
  } else {
    console.log('Case <=', 'variableは1以上です。')
  }
}

/* Lesson_8 AND・OR */
/* Lesson_9 三項演算子 */
/* Lesson_10 switch文 */
/* Lesson_11 配列 */
/* Lesson_12 for文 */

/* Lesson_XXX Enum */
/* Lesson_XXX クラス */
/* Lesson_XXX Date */
/* Lesson_XXX 数値計算 */
/* Lesson_XXX 継承 */
/* Lesson_XXX キャスト変換 */
/* Lesson_XXX ジェネリクス */
export function LessonXXX() {
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
}