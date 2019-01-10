/* インターフェース *
/* 
  データの受け渡しやメンバ・メソッドを規約したいときに用いる
*/
export function Lesson_Interface() {
  // データ受け渡し用にインターフェースでデータセット
  const newEmployee1: NewEmployeeDTO = { name: 'Yamada', score: 100 }
  const newEmployee2: NewEmployeeDTO = { name: 'Tanaka', score: 200 }
  const newEmployee3: NewEmployeeDTO = { name: 'Koike',  score: 300 }

  const result1: JobOfferResultPass | JobOfferResultFailure = judgementJobOffer(newEmployee1)
  const result2: JobOfferResultPass | JobOfferResultFailure = judgementJobOffer(newEmployee2)
  const result3: JobOfferResultPass | JobOfferResultFailure = judgementJobOffer(newEmployee3)
  console.log(result1)  // { name: 'Yamada', isJudgement: false, comment: '不合格', isOinoriEmail: true }
  console.log(result2)  // { name: 'Tanaka', isJudgement: true,  comment: '内定！', ceremony: 'Tue Oct 01 2019 10:00:00 GMT+0900 (JST)' }
  console.log(result3)  // { name: 'Koike',  isJudgement: true,  comment: '内定！', ceremony: 'Tue Oct 01 2019 10:00:00 GMT+0900 (JST)' }
}

interface NewEmployeeDTO {
  name: string
  score: number
}

// 採用結果のインターフェース（規約）
interface JobOfferResultDTO {
  name: string
  isJudgement: boolean
  comment: string
}

// 内定用の結果クラス
class JobOfferResultPass implements JobOfferResultDTO {
  // interfaceの持ち物は強制的に定義する（規約）
  name: string	                    // 名前
  isJudgement: boolean	            // 内定結果
  comment: string	                  // コメント
  ceremony: string                  // 内定式
}

// 不合格用の結果クラス
class JobOfferResultFailure implements JobOfferResultDTO {
  // interfaceの持ち物は強制的に定義する（規約）
  name: string	                    // 名前
  isJudgement: boolean	            // 内定結果
  comment: string	                  // コメント
  isOinoriEmail: boolean            // お祈りメール送信フラグ
}

function judgementJobOffer(newEmployee: NewEmployeeDTO): JobOfferResultPass | JobOfferResultFailure {
  if (newEmployee.score >= 200) {
    const resultDTO: JobOfferResultPass = {
      name: newEmployee.name,
      isJudgement: true,
      comment: '内定！',
      ceremony: new Date('2019/10/1 10:00:00').toString()
    }
    return resultDTO
  } else {
    const resultDTO: JobOfferResultFailure = {
      name: newEmployee.name,
      isJudgement: false,
      comment: '不合格',
      isOinoriEmail: true
    }
    return resultDTO
  }
  
}
