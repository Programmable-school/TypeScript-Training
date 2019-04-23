/* プリミティブ型、Any型 */
export function lessonPriAny() {
  // プリミティブ型
  const num: number = 10	          // number型
  const str: string = '文字列'       // string型
  const isActive: boolean = true	  // boolean型

  console.log('num', num)           // num 10
  console.log('str', str)           // str 文字列
  console.log('isActive', isActive) // isActive true

  // Any型（なんでも入る）
  let value: any
  value = 1
  console.log('number', value) // number 1

  value = '文字列'
  console.log('string', value) // string 文字列

  value = false
  console.log('boolean', value) // boolean false

  value = new Date()
  console.log('class', value) // class 2019-01-03T00:23:46.481Z
}
