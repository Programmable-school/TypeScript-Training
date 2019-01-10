/* 比較演算子 */
export function Lesson_Compare() {
  let variable: number = 1
  
  if (variable === 1) {
    console.log('Case ===', 'variableは1です。')        // Case === variableは1です。
  }

  if (variable !== 1) {
    console.log('Case ===', 'variableは1以外です。')     // ※ココは通らない
  }

  if (variable > 1) {
    console.log('Case >', 'variableは1以上です。')       // ※ココは通らない
  } else {
    console.log('Case >', 'variableは1含め1以下です。')   // Case >= variableは1含め1以上です。
  }
  if (variable >= 1) {
    console.log('Case >=', 'variableは1含め1以上です。')  // Case >= variableは1含め1以上です。
  } else {
    console.log('Case >=', 'variableは1以下です。')      // ※ココは通らない
  }

  if (variable < 1) {
    console.log('Case <', 'variableは1以下です。')       // ※ココは通らない
  } else {
    console.log('Case <', 'variableは1含め1以上です。')   // Case < variableは1含め1以上です。
  }
  if (variable <= 1) {
    console.log('Case <=', 'variableは1含め1以下です。')  // Case <= variableは1含め1以下です。
  } else {
    console.log('Case <=', 'variableは1以上です。')      // ※ココは通らない
  }
}
