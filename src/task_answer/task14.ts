/**
 *  配列のソート（挿入ソート）
 *  @param {number[]} nums ソート対象の値配列
 *  @param {boolean} isDesc 降順でのソートフラグ true:降順 false:昇順
 *  @return {number[]} 出力結果
 */
function sort(nums: number[], isDesc: boolean): number[] {
  const data: number[] = nums
  if (isDesc) {
    for(let i = 1; i < nums.length; i++) {
      let tmpI = data[i]
      for (let j = i; j > 0 && data[j - 1] < tmpI; j--) {
        let tmpJ = data[j - 1]
        data[j - 1] = data[j];
        data[j] = tmpJ
      }
    }
  } else {
    for(let i = 1; i < nums.length; i++) {
      let tmp = data[i]
      let j = 0
      for (j = i; j > 0 && data[j - 1] > tmp; j--) {
        data[j] = data[j - 1]
      }
      data[j] = tmp;
    }
  }
  return data
}

/**
 * 実行
 */
console.log(sort([8, 4, 3, 7, 6, 5, 2, 1], true))   // [ 8, 7, 6, 5, 4, 3, 2, 1 ]
console.log(sort([8, 4, 3, 7, 6, 5, 2, 1], false))  // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(sort([800, 4, 30, 700, 60, 5, 10, 1, 10], true))   // [ 800, 700, 60, 30, 10, 10, 5, 4, 1 ]
console.log(sort([800, 4, 30, 700, 60, 5, 10, 1, 10], false))  // [ 1, 4, 5, 10, 10, 30, 60, 700, 800 ]