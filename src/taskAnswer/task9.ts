/**
 *  * を描画する
 *  @param {number} size *の最大個数
 *  @param {boolean} isReverse true:*が多い順に表示, false：*が少ない順に表示
 *  @return {void}
 */
function drawAsterisk1(size: number, isReverse: boolean) {
  let result: string = ''
  for(let i = 0; i < size; i++) {
    if (isReverse) {
      for(let j = 0; j < size - i; j++) {
        result += '*'
      }
    } else {
      for(let j = 0; j <= i; j++) {
        result += '*'
      }
    }
    result += '\n'
  }
  console.log(result)
}

/**
 * 実行
 */
drawAsterisk1(5, false)
drawAsterisk1(5, true)
