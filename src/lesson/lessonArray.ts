/* 配列 */
export function lessonArray() {
  const nums: number[] = [0, 1, 2, 3]
  console.log(nums)             // [ 0, 1, 2, 3 ]
  console.log(nums[0], nums[1]) // 0 1
  console.log(nums[4])          // undefined

  // 要素を追加
  nums[4] = 4
  console.log(nums[4])          // 4

  // pushで要素を追加
  nums.push(5)
  console.log(nums[5])          // 5
  
  const last: number = nums.slice(-1)[0]  // 最後の要素を取得
  console.log(`last ${last}`)             // last 5

  // popは最後の要素を取り出すため, 元データの最後の要素が失われる
  const pop: number = nums.pop()
  console.log(`pop ${pop}`)      // pop 5
  console.log(`nums ${nums}`)    // nums 0,1,2,3,4

  // 配列は参照渡し（コピーではない）なので、array2の変更はarray1にも反映される。
  const array1: number[] = [0, 1, 2, 3]
  console.log(array1)           // [0, 1, 2, 3]
  const array2 = array1
  array2[2] = 100
  console.log(array1, array2)   // [ 0, 1, 100, 3 ] [ 0, 1, 100, 3 ]
}
