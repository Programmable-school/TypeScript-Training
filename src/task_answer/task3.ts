/**
 *  0から100までを表示する
 *  @return {void}
 */
function showHundred1(): void {
  let result: string = ''
  for(let i = 0; i <= 100; i++) {
    result += `${i} `
  }
  console.log(result)
}

/**
 * 実行
 */
showHundred1() // 0 1 2 3 4 5 ... 95 96 97 98 99 100 
