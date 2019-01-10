/* if分（条件判断） */
export function Lesson_If() {
  let variable: number = 1
  if (variable === 1) {
    console.log(`Case ${variable}`, 'variableは1です。')         // Case 1 variableは1です。
  } else {
    console.log(`Case ${variable}`, 'variableは1以外ですです。')  // ※ココは通らない
  }

  variable = 2
  if (variable === 1) {
    console.log(`Case ${variable}`, 'variableは1です。' )      // ※ココは通らない
  } else {
    console.log(`Case ${variable}`, 'variableは1以外です。')    // Case 2 variableは1以外です。
  }
  
  variable = 3
  if (variable === 1) {
    console.log(`Case ${variable}`, 'variableは1です。' )      // ※ココは通らない
  } else if (variable == 3) {
    console.log(`Case ${variable}`, 'variableは3です。' )      // Case 3 variableは3です。
  } else {
    console.log(`Case ${variable}`, 'variableは0以外です。')    // ※ココは通らない
  }
}

