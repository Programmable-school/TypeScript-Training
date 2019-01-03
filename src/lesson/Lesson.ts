import Staff from '../model/Staff'
import Manager from '../model/Manager'
import SalaryController from '../controller/SalaryController'

/* Hello! World.を表示 */
export function Lesson_HelloWorld() {
  console.log('Hello! world.') // Hello! world.
}

/* 変数と定数 */
export function Lesson_LetConst() {
  // 変数
  let count: number = 1
  count += 1
  
  let message: String = ``
  message = `Lesson ${count}`
  console.log('変数', message) // 変数 Lesson 2

  // 定数
  const name: string = '山田太郎'
  // const宣言した定数は以降にname = '山田花子' と代入することはできない
  console.log('定数', name)   // 定数 山田太郎
}

/* プリミティブ型、Any型 */
export function Lesson_PriAny() {
  // プリミティブ型
  const num: number = 10	          // number型
  const str: string = '文字列'       // string型
  const isActive: boolean = true	  // boolean型

  console.log('num', num)           // num 10
  console.log('str', str)           // str 文字列
  console.log('isActive', isActive) // isActive true

  // Any型（なんでも入る）
  let variable: any
  variable = 1
  console.log('number', variable) // number 1

  variable = '文字列'
  console.log('string', variable) // string 文字列

  variable = false
  console.log('boolean', variable) // boolean false

  variable = new Date()
  console.log('class', variable) // class 2019-01-03T00:23:46.481Z
}

/* Optional型 */
export function Lesson_Optional() {
  console.log('result1', Lesson4_1('shohei', 'developer'))  // result1 shoheiはdeveloper
  console.log('result1', Lesson4_1('shohei', undefined))    // result1 profileがundefinedです
  console.log('result1', Lesson4_1('shohei', null))         // result1 profileがnullです
}
function Lesson4_1(name: string, profile?: string): string {
  if (!profile) {
    return `profileが${profile}です`
  }
  return name + 'は' + profile
}

/* 演算子 */
export function Lesson_Calc() {
  let variable: number = 1
  const resultA: number = variable + 2
  const resultB: number = variable * 2
  const resultC: number = variable / 2
  console.log('resultA', resultA)   // resultA 3
  console.log('resultB', resultB)   // resultB 2
  console.log('resultC', resultC)   // resultC 0.5

  let resultD: number = 1
  resultD += 2
  let resultE: number = 1
  resultE *= 2
  let resultF: number = 1
  resultF /= 2
  console.log('resultD', resultD)   // resultD 3
  console.log('resultE', resultE)   // resultE 2
  console.log('resultF', resultF)   // resultF 0.5
}

/* 配列 */

/* 連想配列 */

/* if分 */
export function Lesson_If() {
  let variable: number = 1
  if (variable === 1) {
    console.log(`Case ${variable}`, 'variableは1です。')         // Case 1 variableは1です。
  } else {
    console.log(`Case ${variable}`, 'variableは1以外ですです。')  // ※ココは通らない
  }

  variable = 2
  if (variable === 1) {
    console.log(`Case ${variable}`, 'variableは1です。' )      // ※ココは通らない
  } else {
    console.log(`Case ${variable}`, 'variableは1以外です。')    // Case 2 variableは1以外です。
  }
  
  variable = 3
  if (variable === 1) {
    console.log(`Case ${variable}`, 'variableは1です。' )      // ※ココは通らない
  } else if (variable == 3) {
    console.log(`Case ${variable}`, 'variableは3です。' )      // Case 3 variableは3です。
  } else {
    console.log(`Case ${variable}`, 'variableは0以外です。')    // ※ココは通らない
  }
}

/* 比較演算子 */
export function Lesson_Compare() {
  let variable: number = 1
  
  if (variable === 1) {
    console.log('Case ===', 'variableは1です。')        // Case === variableは1です。
  }

  if (variable !== 1) {
    console.log('Case ===', 'variableは1以外です。')     // ※ココは通らない
  }

  if (variable > 1) {
    console.log('Case >', 'variableは1以上です。')       // ※ココは通らない
  } else {
    console.log('Case >', 'variableは1含め1以下です。')   // Case >= variableは1含め1以上です。
  }
  if (variable >= 1) {
    console.log('Case >=', 'variableは1含め1以上です。')  // Case >= variableは1含め1以上です。
  } else {
    console.log('Case >=', 'variableは1以下です。')      // ※ココは通らない
  }

  if (variable < 1) {
    console.log('Case <', 'variableは1以下です。')       // ※ココは通らない
  } else {
    console.log('Case <', 'variableは1含め1以上です。')   // Case < variableは1含め1以上です。
  }
  if (variable <= 1) {
    console.log('Case <=', 'variableは1含め1以下です。')  // Case <= variableは1含め1以下です。
  } else {
    console.log('Case <=', 'variableは1以上です。')      // ※ココは通らない
  }
}

/* AND・OR */
export function Lesson_AndOr() {
  const isActive: boolean = true
  const age: number = 20
  
  if (isActive && age === 20) {
    console.log('AND', 'isActiveとageは一致')  // AND isActiveとageは一致
  } else {
    console.log('AND', '一致しない')           // ※ココは通らない
  }

  if (isActive || age === 30) {
    console.log('OR', `isActiveだけ一致`)      // OR isActiveだけ一致
  } else {
    console.log('OR', '一致しない')            // ※ココは通らない
  }
}

/* 三項演算子 */
export function Lesson_Ternary() {
  const isActive: boolean = true
  const age: number = 20

  const resultA: string = isActive && age === 20 ? 'isActiveとageは一致' : '一致しない'
  const resultB: string = isActive || age === 30 ? 'isActiveだけ一致' : '一致しない'
  console.log('AND', resultA)  // AND isActiveとageは一致
  console.log('OR', resultB)   // OR isActiveだけ一致
}

/* switch文 */
export function Lesson_Switch() {
  const resultA: string = Lesson_Switch_0(1988)
  const resultB: string = Lesson_Switch_0(2018)
  const resultC: string = Lesson_Switch_0(100000)
  console.log(resultA)  // 昭和63年
  console.log(resultB)  // 平成30年
  console.log(resultC)  // 分かりません！
}
function Lesson_Switch_0(year: number): string {
  let result: string
  switch (year) {
    case 1988:
      result = '昭和63年'
      break
    case 2018:
      result = '平成30年'
      break
    default:
      result = '分かりません！'
  }
  return result
}
/* while文 */
/* for文 */
/* 関数 */
/* Enum */
/* クラス */
/* キャスト変換 */
/* 日付関数（Date） */
/* 数値計算（Math） */
/* static */
/* 継承 */
/* インターフェース */
/* 非同期処理 */
/* ReactiveX */

/* ジェネリクス */
export function Lesson_Generics() {
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