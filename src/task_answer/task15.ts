/**
 *  カウントダウンする
 *  @param {number} maxTime 
 *  @return {void}
 */
function countDownTimer(maxTime: number) {
  let count = 0
  const intervalId = setInterval( () =>{
    console.log(maxTime - count)
    count++
    if (maxTime < count) {
      clearInterval(intervalId) 
    }
  }, maxTime*1000)
}


/**
 * 実行
 */
countDownTimer(5) // 1秒ごとに5 ... 0とカウントダウンして処理が終了する

