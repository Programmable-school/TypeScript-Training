/* クラス */
class Human {
  // ■ 変数（propety）
  public name: string	        // 修飾子:public    外部公開
  sexType: SexType	          // 修飾子:public    修飾子がない場合はpublicになる
  height: number	            // 修飾子:public    修飾子がない場合はpublicになる
  private weight: number	    // 修飾子:private   外部公開しないので自分しか読み書きできない
  partner?: Human	            // optional型で宣言. Optional型の場合はデータにundefinedチェックを行う
  readonly birthDay: string	  // 修飾子:readonly  読み取り専用（定数）

  // ■ コンストラクタはクラスのインスタンス（実体）が生成されたタイミングで処理される
  constructor(sexType: SexType, birthDay: string) {
    this.sexType = sexType
    this.birthDay = birthDay    // コンストラクタの中で宣言できる
  }

  // ■ 関数
  // 修飾子を付けれる（public, privateなど） 修飾子がない場合はpublicになる.
  setStatus(height: number, weight: number) {
    this.height = height
    this.weight = weight
  }
  
  showStatus() {
    console.log('name', this.name, 'height', this.height, 'weight', this.weight, 'birthDay', this.birthDay)
  }

  introPartner(human: Human) {
    if (this.sexType != human.sexType) {
      this.partner = human
      human.partner = this
      this.showHonne()
    }
  }

  showPartner() {
    if (this.partner !== undefined) {
      console.log(`${this.name}のパートナーは`, this.partner.name)
    }
  }

  private showHonne() {
    console.log('まぁいつ別れるか分からないけどね。これは独り言だから内緒だよ！')
  }
}

enum SexType {
  Man,
  Woman
}

export function Lesson_Class() {
  const man: Human = new Human(SexType.Man, '1990/1/1') // クラスのインスタンスを生成するときは new クラス名() の書き方をする
  man.name = 'Taro'
  man.setStatus(170, 80)
  man.showStatus()            // name Taro height 170 weight 80 birthDay 1990/1/1

  const woman: Human = new Human(SexType.Woman, '1992/1/1')
  woman.name = 'Hanako'
  woman.setStatus(150, 100)
  woman.showStatus()          // name Hanako height 150 weight 100 birthDay 1992/1/1

  man.introPartner(woman)     // まぁいつ別れるか分からないけどね。これは独り言だから内緒だよ！
  man.showPartner()           // Taroのパートナーは Hanako
  woman.showPartner()         // Hanakoのパートナーは Taro
}