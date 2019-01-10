/* 関数 */
export function Lesson_Function() {
  Lesson_Function1()                        // 関数です.
  Lesson_Function2('引数を指定できます')       // 引数を指定できます
  const result = Lesson_Function3(10, 2)    
  console.log('足し算の関数', result)         // 足し算の関数 12
}
function Lesson_Function1() {
  console.log('関数です.')
}
function Lesson_Function2(str: string) {
  console.log(str)
}
function Lesson_Function3(x: number, y: number): number {
  return x + y
}
