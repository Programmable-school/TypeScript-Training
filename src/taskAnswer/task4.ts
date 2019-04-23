/**
 *  0から100までを表示する。5の倍数ごとに改行する。
 *  @return {void}
 */
function showHundred2(): void {
  let result: string = ''
  for(let i = 0; i <= 100; i++) {
    result += `${i} `
    if (i % 5 === 0 && i !== 0) {
      result += '\n'
    }
  }
  console.log(result)
}

/**
 * 実行
 */
/**
 * 0 1 2 3 4 5 
 * 6 7 8 9 10 
 *   ......
 * 91 92 93 94 95 
 * 96 97 98 99 100 
 */
showHundred2()
