/* if文（条件分岐） */
export function lessonIf() {
  let value: number = 1
  if (value === 1) {
    console.log(`Case ${value}`, 'valueは1です。')         // ここを通る
  } else {
    console.log(`Case ${value}`, 'valueは1以外です。')      // ここは通らない
  }

  value = 2
  if (value === 1) {
    console.log(`Case ${value}`, 'valueは1です。' )       // ここは通らない
  } else {
    console.log(`Case ${value}`, 'valueは1以外です。')     // ここを通る
  }
  
  value = 3
  if (value === 1) {
    console.log(`Case ${value}`, 'valueは1です。' )       // ここは通らない
  } else if (value == 3) {
    console.log(`Case ${value}`, 'valueは3です。' )       // ここを通る
  } else {
    console.log(`Case ${value}`, 'valueは1以外です。')     // ここは通らない
  }
}

