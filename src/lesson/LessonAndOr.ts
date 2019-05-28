/* AND・OR, 三項演算子 */
export function lessonAndOr() {
  const isActive: boolean = true
  const age: number = 20
  
  // AND
  if (isActive && age === 20) {
    console.log('AND', 'isActiveとageがtrue')  // ここを通る
  } else {
    console.log('条件式に当てはまらない')         // ここは通らない
  }

  // OR
  if (isActive || age === 30) {
    console.log('OR', 'isActiveだけ一致')      // ここを通る
  } else {
    console.log('条件式に当てはまらない')         // ここは通らない
  }

  // 三項演算子
  const resultA: string = isActive && age === 20 ? 'isActiveとageは一致' : '一致しない'
  const resultB: string = isActive || age === 30 ? 'isActiveだけ一致' : '一致しない'
  console.log('AND', resultA)  // AND isActiveとageは一致
  console.log('OR', resultB)   // OR isActiveだけ一致
}
