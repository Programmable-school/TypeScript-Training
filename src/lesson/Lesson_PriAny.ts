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
