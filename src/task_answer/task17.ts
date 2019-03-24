/**
 *  key: valueのデータでnull以外のデータに正規化する
 *  @param {any} データ
 *  @return {any} 正規化した結果
 */
function normKeyValues(data: any): any {
  let result: any = {}
  for(let i in data) {
    if (data[i] !== null) {
      result[i] = data[i]
    }
  }
  return result
}


/**
 * 実行
 */
const inputKeyValues = {
  id: '100',
  name: 'shohei',
  age: null,
  birthday: '1988/10/07',
  hobby: null,
}
console.log(normKeyValues(inputKeyValues)) // { id: '100', name: 'shohei', birthday: '1988/10/07' }

