/* switch文（条件分岐） */
export function lessonSwitch() {
  const resultA: string = func1(1988)
  const resultB: string = func1(2018)
  const resultC: string = func1(100000)
  console.log(resultA)  // 昭和63年
  console.log(resultB)  // 平成30年
  console.log(resultC)  // 分かりません！
}
function func1(year: number): string {
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
