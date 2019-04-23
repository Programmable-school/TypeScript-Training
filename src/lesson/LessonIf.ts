/* if分（条件判断） */
export function lessonIf() {
  let value: number = 1
  if (value === 1) {
    console.log(`Case ${value}`, 'valueは1です。')         // Case 1 valueは1です。
  } else {
    // ※ココは通らない
    console.log(`Case ${value}`, 'valueは1以外です。')
  }

  value = 2
  if (value === 1) {
    // ※ココは通らない
    console.log(`Case ${value}`, 'valueは1です。' )
  } else {
    console.log(`Case ${value}`, 'valueは1以外です。')    // Case 2 valueは1以外です。
  }
  
  value = 3
  if (value === 1) {
    // ※ココは通らない
    console.log(`Case ${value}`, 'valueは1です。' )
  } else if (value == 3) {
    console.log(`Case ${value}`, 'valueは3です。' )      // Case 3 valueは3です。
  } else {
    // ※ココは通らない
    console.log(`Case ${value}`, 'valueは1以外です。')
  }
}

