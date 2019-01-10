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
