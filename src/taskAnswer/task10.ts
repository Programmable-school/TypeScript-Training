/**
 *  * を描画する
 *  @param {number} size *の最大個数
 *  @param {boolean} isReverse true:*が多い順に表示, false：*が少ない順に表示
 *  @return {void}
 */
function drawAsterisk2(size: number, isReverse: boolean) {
  let result: string = ''
  for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
      if (isReverse) {
        if (i <= j) {
          result += '*'
        } else {
          result += ' '
        }
      } else {
        if (j < size - i - 1) {
          result += ' '
        } else {
          result += '*'
        }
      }
    }
    result += '\n'
  }
  console.log(result)
}

/**
 * 実行
 */
drawAsterisk2(5, false)
drawAsterisk2(5, true)