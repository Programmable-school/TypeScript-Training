/* for文（繰り返し） */
export function Lesson_For() {
  const nums: number[] = [0, 1, 2, 3, 4, 5]
  
  // for
  for(let i = 0; i < nums.length; i++) {
    console.log('for', i, nums[i]) // for 0 0 ... for 5 5 順に表示される
  }

  // for-in
  for(let i in nums) {
    console.log('for in', i, nums[i]) // for in 0 0 ... for in 5 5 順に表示される
  }

  // foreach（オススメ）
  nums.forEach((item, i) => {
    console.log('foreach', i, nums[i], item) // foreach 0 0 0 ... foreach 5 5 5 順に表示される
  })

}

