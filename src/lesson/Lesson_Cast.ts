/* キャスト変換（型変換） */
export function Lesson_Cast() {
  const numStr: string = '1000'
  const num: number = Number(numStr)
  if (typeof num === 'number') {
    console.log(`${typeof numStr} -> ${typeof num}`, num)                     // string -> number 1000
  }

  const strNum: number = 2000
  const str: string = String(strNum)
  if (typeof str === 'string') {
    console.log(`${typeof strNum} -> ${typeof str}`, str, strNum.toString())  // number -> string 2000 2000
  }

  // インスタンスを型判定をする場合はinstanceofを使う
  const classAny: any = new LessonCast1()
  if (classAny instanceof LessonCast1) {
    console.log('classAnyの型はLessonCast1です')  // classAnyの型はLessonCast1です
  }
}
class LessonCast1 {}