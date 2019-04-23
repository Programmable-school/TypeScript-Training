/**
 * static
 *  インスタンスを生成しない静的メンバ・メソッド
 *  静的な保存領域にデータを保持するため、値をどこから読んでも共通
 *  共有パラメータ、値を共有したい時に利用する
 */
export function lessonStatic() {
  const class1: StaticClass = new StaticClass()
  console.log(class1.getCount())      // 10

  class1.setCount(200)
  console.log(class1.getCount())      // 200

  // class1で設定した値と同じになる　
  const class2: StaticClass = new StaticClass()
  console.log(class2.getCount())      // 200

  // クラスのインスタンスを生成しなくてもstaticを直接呼べる
  const count = StaticClass.count
  console.log(count)                  // 200

  // メソッドも同様に直接呼べる
  const result = StaticClass.getResult()
  console.log(result)                 // Count is 200
}

class StaticClass {
  static count: number = 10
  static getResult() {
    return `Count is ${this.count}`
  }
  getCount() {
    return StaticClass.count
  }
  setCount(count: number) {
    StaticClass.count = count
  }
}