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
  const variable: number = 1
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
export function Lesson_Array() {
  const nums: number[] = [0, 1, 2, 3]
  console.log(nums)             // [ 0, 1, 2, 3 ]
  console.log(nums[0], nums[1]) // 0 1
  console.log(nums[4])          // undefined

  // 要素を追加
  nums[4] = 4
  console.log(nums[4])          // 4

  // pushで要素を追加
  nums.push(5)
  console.log(nums[5])          // 5
  
  const last: number = nums.slice(-1)[0]  // 最後の要素を取得
  console.log(`last ${last}`)             // last 5

  // popは最後の要素を取り出すため, 元データの最後の要素が失われる
  const pop: number = nums.pop()
  console.log(`pop ${pop}`)      // pop 5
  console.log(`nums ${nums}`)    // nums 0,1,2,3,4
}

/* 連想配列 */
export function Lesson_AssociativeArray() {
  const itemA: any = {
    name: 'Taro',
    age: 20
  }
  const itemB: any = {
    name: 'Hanako',
    age: 30
  }
  const itemC: any = {
    name: 'Ueda',
    age: 40
  }
  console.log(itemA) // { name: 'Taro', age: 20 }

  const items: any[] = [itemA, itemB]
  items.push(itemC)
  console.log(items) // [ { name: 'Taro', age: 20 },
                     //   { name: 'Hanako', age: 30 },
                     //   { name: 'Ueda', age: 40 } ]
}

/* リスト操作 */
export function Lesson_ListOperation() {
  const nums: number[] = [0, 1, 2, 3, 4, 5]
  
  // ■ filter
  // 条件に合う値だけを取り出します。条件に当てはまる要素が複数ある場合があるので配列で取得される。
  // 書き方1
  const numsFiltered1: number[] = nums.filter(item => item === 0)
  console.log('filter1', numsFiltered1) // filter1 [0]

  // 書き方2
  const numsFiltered2: number[] = nums.filter(item => { 
    if (item === 0) {
      return true
    }
    return false
  })
  console.log('filter2', numsFiltered2) // filter2 [0]

  // ■ map
  // 新しい要素の配列を作成する。値を加工して新しい配列を作成するときに利用する。
  // 書き方1
  const numsMap1: number[] = nums.map(item => item * 2)
  console.log('map1', numsMap1) // map1 [ 0, 2, 4, 6, 8, 10 ]

  // 書き方2
  const numsMap2: number[] = nums.map(item => { return item * 2 })
  console.log('map2', numsMap2) // map2 [ 0, 2, 4, 6, 8, 10 ]

  // ■ reduce
  // 配列の要素を左から右へ適用し,単一の値にします。
  const reduce1: number = nums.reduce((prevItem, currentItem) => prevItem + currentItem )
  console.log('reduce1', reduce1) // reduce1 15

  const maxReduce2: number = nums.reduce((prevItem, currentItem) => {
    if (prevItem > currentItem) {
      return prevItem
    } else {
      return currentItem
    }
  })
  console.log('maxReduce2', maxReduce2) // maxReduce2 5

  const minReduce3: number = nums.reduce((prevItem, currentItem) => {
    if (prevItem > currentItem) {
      return currentItem
    } else {
      return prevItem
    }
  })
  console.log('minReduce3', minReduce3) // minReduce3 0

  // ■ every
  // 全ての要素が条件を満たす場合は trueを返す
  const isEvery1: boolean = nums.every(item => item >= 0)
  console.log('isEvery1', isEvery1) // isEvery1 true

  const isEvery2: boolean = nums.every(item => item%2 === 0)
  console.log('isEvery2', isEvery2) // isEvery2 false

  // ■ some
  // 条件を満たす要素が１つでもある場合は trueを返す
  const isSome1: boolean = nums.some(item => item >= 0)
  console.log('isSome1', isSome1) // isSome1 true

  const isSome2: boolean = nums.some(item => item%2 === 0)
  console.log('isSome2', isSome2) // isSome2 true

  // ■ sort
  // 配列の要素を並べ替える
  const sort1: number[] = nums.sort((previousItem, currentItem) => {
    if (previousItem < currentItem) { 
      return -1
    } else {
      return 1
    }
  }) // 昇順ソート（小さい順）
  console.log('sort1', sort1) // sort1 [ 0, 1, 2, 3, 4, 5 ] 

  const sort2: number[] = nums.sort((previousItem, currentItem) => {
    if (previousItem > currentItem) {
      return -1
    } else {
      return 1
    }
  }) // 降順ソート（大きい順）
  console.log('sort2', sort2) // sort2 [ 5, 4, 3, 2, 1, 0 ] 
}

/* if分（条件判断） */
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

/* AND・OR, 三項演算子 */
export function Lesson_AndOr() {
  const isActive: boolean = true
  const age: number = 20
  
  // 書き方1
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

  // 書き方2 三項演算子
  const resultA: string = isActive && age === 20 ? 'isActiveとageは一致' : '一致しない'
  const resultB: string = isActive || age === 30 ? 'isActiveだけ一致' : '一致しない'
  console.log('AND', resultA)  // AND isActiveとageは一致
  console.log('OR', resultB)   // OR isActiveだけ一致
}

/* switch文（条件判断） */
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

/* while文（繰り返し） */
export function Lesson_While() {
  const nums: number[] = [0, 1, 2, 3, 4, 5]
  let index: number = 0
  let total: number = nums[0]

  // while
  while (index < 5) { // 無限ループ注意
    total += nums[index]
    index += 1
  }
  console.log('while', total) // while 10

  // do-while
  do {
    console.log('do-while', `indexは${index}だけど必ず1回は実行される`) // do-while indexは5だけど必ず1回は実行される
  } while(index < 5) // 繰り返し継続判断は後で実行される。
}

/* for文（繰り返し） */
export function Lesson_For() {
  const nums: number[] = [0, 1, 2, 3, 4, 5]
  
  // for
  for(let i = 0; i < nums.length; i++) {
    console.log('for', i, nums[i]) // for 0 0 ... for 5 5 順に表示される
  }

  // for-in
  for(let i in nums) {
    console.log('for in', i, nums[i]) // for in 0 0 ... for in 5 5 順に表示される
  }

  // foreach（オススメ）
  nums.forEach((item, i) => {
    console.log('foreach', i, nums[i], item) // foreach 0 0 0 ... foreach 5 5 5 順に表示される
  })

}

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