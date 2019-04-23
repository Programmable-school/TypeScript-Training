/* 比較演算子 */
export function lessonCompare() {
  let value: number = 1
  
  if (value === 1) {
    console.log('Case ===', 'valueは1です。')        // Case === valueは1です。
  }

  if (value !== 1) {
    // ※ココは通らない
    console.log('Case !==', 'valueは1以外です。')     
  }

  if (value > 1) {
    // ※ココは通らない
    console.log('Case >', 'valueは1以上です。')
  } else {
    console.log('Case >', 'valueは1含め1以下です。')   // Case >= valueは1含め1以上です。
  }
  if (value >= 1) {
    console.log('Case >=', 'valueは1含め1以上です。')  // Case >= valueは1含め1以上です。
  } else {
    // ※ココは通らない
    console.log('Case >=', 'valueは1以下です。')
  }

  if (value < 1) {
    // ※ココは通らない
    console.log('Case <', 'valueは1以下です。')
  } else {
    console.log('Case <', 'valueは1含め1以上です。')   // Case < valueは1含め1以上です。
  }
  if (value <= 1) {
    console.log('Case <=', 'valueは1含め1以下です。')  // Case <= valueは1含め1以下です。
  } else {
    // ※ココは通らない
    console.log('Case <=', 'valueは1以上です。')
  }
}
