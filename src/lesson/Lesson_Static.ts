/* static */
/* 
  インスタンスを生成しない静的メンバ・メソッド
  静的な保存領域にデータを保持するため、値をどこから読んでも共通
  共有パラメータ、値を共有したい時に利用する
*/
export function Lesson_Static() {
  const class1: LessonStatic1 = new LessonStatic1()
  console.log(class1.getCount())      // 10

  class1.setCount(200)
  console.log(class1.getCount())      // 200

  // class1で設定した値と同じになる　
  const class2: LessonStatic1 = new LessonStatic1()
  console.log(class2.getCount())      // 200

  // クラスのインスタンスを生成しなくてもstaticを直接呼べる
  const count = LessonStatic1.count
  console.log(count)                  // 200

  // メソッドも同様に直接呼べる
  const result = LessonStatic1.getResult()
  console.log(result)                 // Count is 200
}

class LessonStatic1 {
  static count: number = 10
  static getResult() {
    return `Count is ${this.count}`
  }
  getCount() {
    return LessonStatic1.count
  }
  setCount(count: number) {
    LessonStatic1.count = count
  }
}