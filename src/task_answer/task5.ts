/**
 *  3つの文字列を連結した文字列を返す
 *  @param {string} str1 文字列1
 *  @param {string} str2 文字列2
 *  @param {string} str3 文字列3
 *  @return {string} 連結した文字列
 */
function mergeString(str1: string, str2: string, str3: string): string {
  return str1 + str2 + str3
}

/**
 * 実行
 */
console.log(mergeString('俺は', '明日', '勉強する')) // 俺は明日勉強する
