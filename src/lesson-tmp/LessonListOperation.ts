/* リスト操作 */
export function lessonListOperation() {
  const nums: number[] = [0, 1, 2, 3, 4, 5]
  
  /**
   * filter
   *  条件に合う値だけを取り出します。条件に当てはまる要素が複数ある場合があるので配列で取得される。
   */
  const numsFiltered1: number[] = nums.filter(item => item === 0)
  console.log('filter1', numsFiltered1) // filter1 [0]

  const numsFiltered2: number[] = nums.filter(item => { 
    if (item === 0) {
      return true
    }
    return false
  })
  console.log('filter2', numsFiltered2) // filter2 [0]

  /**
   * map
   *  新しい要素の配列を作成する。値を加工して新しい配列を作成するときに利用する。
   */
  const numsMap1: number[] = nums.map(item => item * 2)
  console.log('map1', numsMap1) // map1 [ 0, 2, 4, 6, 8, 10 ]

  const numsMap2: number[] = nums.map(item => { return item * 2 })
  console.log('map2', numsMap2) // map2 [ 0, 2, 4, 6, 8, 10 ]

  /**
   * reduce
   *  配列の要素を左から右へ適用し,単一の値にします。
   */
  const reduce1: number = nums.reduce((prevItem, currentItem) => prevItem + currentItem )
  console.log('reduce1', reduce1) // reduce1 15

  const maxReduce2: number = nums.reduce((prevItem, currentItem) => {
    if (prevItem > currentItem) {
      return prevItem
    } else {
      return currentItem
    }
  })
  console.log('maxReduce2', maxReduce2) // maxReduce2 5

  const minReduce3: number = nums.reduce((prevItem, currentItem) => {
    if (prevItem > currentItem) {
      return currentItem
    } else {
      return prevItem
    }
  })
  console.log('minReduce3', minReduce3) // minReduce3 0

  /**
   * every
   *  全ての要素が条件を満たす場合は trueを返す。
   */
  const isEvery1: boolean = nums.every(item => item >= 0)
  console.log('isEvery1', isEvery1) // isEvery1 true

  const isEvery2: boolean = nums.every(item => item%2 === 0)
  console.log('isEvery2', isEvery2) // isEvery2 false

  /**
   * some
   *  条件を満たす要素が１つでもある場合は trueを返す。
   */
  const isSome1: boolean = nums.some(item => item >= 0)
  console.log('isSome1', isSome1) // isSome1 true

  const isSome2: boolean = nums.some(item => item%2 === 0)
  console.log('isSome2', isSome2) // isSome2 true

  /**
   * sort
   *  配列の要素を並べ替える。
   */
  const sort1: number[] = nums.sort((previousItem, currentItem) => {
    if (previousItem < currentItem) { 
      return -1
    } else {
      return 1
    }
  }) // 昇順ソート（小さい順）
  console.log('sort1', sort1) // sort1 [ 0, 1, 2, 3, 4, 5 ] 

  const sort2: number[] = nums.sort((previousItem, currentItem) => {
    if (previousItem > currentItem) {
      return -1
    } else {
      return 1
    }
  }) // 降順ソート（大きい順）
  console.log('sort2', sort2) // sort2 [ 5, 4, 3, 2, 1, 0 ] 
}
