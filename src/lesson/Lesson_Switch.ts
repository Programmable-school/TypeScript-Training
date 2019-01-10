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
