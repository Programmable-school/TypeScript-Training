/**
 *  二つの値の足し算、引き残、掛け算、割り算の計算
 *  @param {number} a 値
 *  @param {number} b 値
 *  @param {CalcType} type 計算種別（enumで定義してください。）
 *  @return {number} 出力結果
 */
function calc(a: number, b: number, type: CalcType): number {
  switch (type) {
    case CalcType.Add:
      return  a + b
    case CalcType.Sub:
      return a - b
    case CalcType.Multi:
      return a * b
    case CalcType.Div:
      return a / b 
  }
}

enum CalcType {
  Add,
  Sub,
  Multi,
  Div
}

/**
 * 実行
 */
const a = 10;
const b = 2;
console.log('Add', calc(a, b, CalcType.Add))      // Add 12
console.log('Sub', calc(a, b, CalcType.Sub))      // Sub 8
console.log('Multi', calc(a, b, CalcType.Multi))  // Multi 20
console.log('Div', calc(a, b, CalcType.Div))      // Div 5