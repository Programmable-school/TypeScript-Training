/* while文（繰り返し） */
export function lessonWhile() {
  const nums: number[] = [0, 1, 2, 3, 4, 5]
  let index: number = 0
  let total: number = nums[0]

  // while
  while (index < 5) { // 無限ループ注意
    total += nums[index]
    index += 1
  }
  console.log('while', total) // while 10

  // do-while
  do {
    console.log('do-while', `indexは${index}だけど必ず1回は実行される`) // do-while indexは5だけど必ず1回は実行される
  } while(index < 5) // 繰り返し継続判断は後で実行される。
}
