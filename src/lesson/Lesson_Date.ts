/* 日付関数（Date） */
export function Lesson_Date() {
  
  // ■ 現在の日時を取得
  const nowDate: Date = new Date()
  console.log(nowDate)              // 2019-01-07T01:05:06.449Z
  console.log(nowDate.toString())   // Mon Jan 07 2019 10:05:06 GMT+0900 (JST)

  // ■ タイムゾーン確認（実行環境に依存）
  console.log('Timezone', nowDate.getTimezoneOffset()/60) // -9 (実行環境によって異なる. -9の場合はUTC+9時間なのでJSTです)

  // ■ 文字列から日時を取得
  const date1: Date = new Date('2019/1/6 10:20:30')
  console.log(date1)                     // 2019-01-06T01:20:30.000Z
  const year = date1.getFullYear()       // 年
  const month = date1.getMonth() + 1     // 月 0始まりなので1を足す
  const day = date1.getDate()            // 日
  const hour = date1.getHours()          // 時
  const minute = date1.getMinutes()      // 分
  const second = date1.getSeconds()      // 秒
  const dayOfWeek = date1.getDay()       // 曜日（数値）
  const dayOfWeekStr = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'][dayOfWeek]  // 曜日（文字列）
  console.log(`${year}/${month}/${day}（${dayOfWeekStr}） ${hour}:${minute}:${second}`) // 2019/1/6（日曜日） 10:20:30

  // ■ set関数より日付を指定
  const data2: Date = new Date()
  data2.setFullYear(2018)               // 2018年
  data2.setMonth(0)                     // 1月（0始まりなので）
  data2.setDate(20)                     // 20日
  data2.setHours(12)                    // 12時
  data2.setMinutes(30)                  // 30分
  data2.setSeconds(50)                  // 50秒
  console.log(data2)                    // 2018-01-20T03:30:50.450Z
  console.log(data2.toString())         // Sat Jan 20 2018 12:30:50 GMT+0900 (JST)
}
