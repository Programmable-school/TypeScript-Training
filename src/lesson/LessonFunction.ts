/* 関数 */
export function lessonFunction() {
  func1()                        // 関数です.
  func2('引数を指定できます')       // 引数を指定できます
  const result = func3(10, 2)    
  console.log('足し算の関数', result)         // 足し算の関数 12
}
function func1() {
  console.log('関数です.')
}
function func2(str: string) {
  console.log(str)
}
function func3(x: number, y: number): number {
  return x + y
}
