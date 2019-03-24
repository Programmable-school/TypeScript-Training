/**
 *  「こんにちは」を取得する
 *  @return {string} 文字列
 */
function getHelloWithDate(): string {
  const date = new Date()
  const hours = date.getHours()
  if (5 <= hours && hours < 12) {
    return 'おはようございます'
  } else if (12 <= hours && hours < 18) {
    return 'こんにちは'
  } else if (18 <= hours && hours < 24) {
    return 'こんばんは'
  } else {
    return '夜更かしさん'
  }
}

/**
 * 実行
 */
console.log(getHelloWithDate()) // こんばんは ※時間帯によって異なる
