/* AND・OR, 三項演算子 */
export function lessonAndOr() {
  const isActive: boolean = true
  const age: number = 20
  
  // 書き方1
  if (isActive && age === 20) {
    console.log('AND', 'isActiveとageは一致')  // AND isActiveとageは一致
  } else {
    // ※ココは通らない
    console.log('AND', '一致しない')
  }

  if (isActive || age === 30) {
    console.log('OR', 'isActiveだけ一致')      // OR isActiveだけ一致
  } else {
    // ※ココは通らない
    console.log('OR', '一致しない')
  }

  // 書き方2 三項演算子
  const resultA: string = isActive && age === 20 ? 'isActiveとageは一致' : '一致しない'
  const resultB: string = isActive || age === 30 ? 'isActiveだけ一致' : '一致しない'
  console.log('AND', resultA)  // AND isActiveとageは一致
  console.log('OR', resultB)   // OR isActiveだけ一致
}
