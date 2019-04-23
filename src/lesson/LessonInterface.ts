/* インターフェース *
/* 
  データの受け渡しやメンバ・メソッドを規約したいときに用いる
*/
export function lessonInterface() {
  // データ受け渡し用にインターフェースでデータセット
  const student1: StudentDTO = { name: 'Yamada', score: 100 }
  const student2: StudentDTO = { name: 'Tanaka', score: 200 }
  const student3: StudentDTO = { name: 'Koike',  score: 300 }

  // 内定ジャッジメント
  const result1: JobOfferResultPass | JobOfferResultFailure = judgementJobOffer(student1)
  const result2: JobOfferResultPass | JobOfferResultFailure = judgementJobOffer(student2)
  const result3: JobOfferResultPass | JobOfferResultFailure = judgementJobOffer(student3)

  // 合否を表示
  console.log(result1)  // { name: 'Yamada', isJudgement: false, comment: '不合格', isOinoriEmail: true }
  console.log(result2)  // { name: 'Tanaka', isJudgement: true,  comment: '内定！', ceremony: 'Tue Oct 01 2019 10:00:00 GMT+0900 (JST)' }
  console.log(result3)  // { name: 'Koike',  isJudgement: true,  comment: '内定！', ceremony: 'Tue Oct 01 2019 10:00:00 GMT+0900 (JST)' }
}

// 学生インターフェース
interface StudentDTO {
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

function judgementJobOffer(student: StudentDTO): JobOfferResultPass | JobOfferResultFailure {
  if (student.score >= 200) {
    const resultDTO: JobOfferResultPass = {
      name: student.name,
      isJudgement: true,
      comment: '内定！',
      ceremony: '2019/10/1 10:00:00'
    }
    return resultDTO
  } else {
    const resultDTO: JobOfferResultFailure = {
      name: student.name,
      isJudgement: false,
      comment: '不合格',
      isOinoriEmail: true
    }
    return resultDTO
  }
  
}
