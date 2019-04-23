/**
 *  key: valueの形式でデータを取得する
 *  @return {any} key: valueの形式
 */
function getKeyValues(id: string, value: string): any {
  return {
    id: id,
    value: value,
  }
}


/**
 * 実行
 */
console.log(getKeyValues('0', 'shohei')) // { id: '0', value: 'shohei' }

