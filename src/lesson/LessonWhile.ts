/* while文（繰り返し） */
export function lessonWhile() {
  const nums: number[] = [0, 1, 2, 3, 4, 5]
  let index: number = 0
  let total: number = nums[0]

  // while
  while (index < 5) { // whileの条件確認は処理前に行われる。
    total += nums[index]
    index += 1
  }
  console.log('total', total) // total 10

  // do-while
  do {
    console.log(`indexは${index}だけど必ず1回は実行される`) // indexは5だけど必ず1回は実行される
  } while(index < 5) // whileの条件確認は処理後に行われる。
}
