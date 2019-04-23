/**
 *  配列を任意の倍数にする
 *  @param {number[]} nums 対象データ配列
 *  @param {number} multiple 倍数
 *  @return {number[]} 出力結果 multipleの値で掛けたnumsの結果
 */
function multiple(nums: number[], multiple: number): number[] {
  return nums.map((num) => num * multiple)
}

/**
 * 実行
 */
console.log('multiple', multiple([10, 2, 4, 1], 3)) // multiple [ 30, 6, 12, 3 ]
