/* 変数と定数 */
export function lessonLetConst() {
  // 変数
  let count: number = 1
  count += 1
  
  let message: string = ''
  message = `${count}`
  console.log('変数', message) // 変数 2

  // 定数
  const name: string = '山田太郎'
  // const宣言した定数は以降にname = '山田花子' と代入することはできない
  console.log('定数', name)   // 定数 山田太郎
}