/* クラス */
class Human {
  /** 
   * 変数（propety）
   * */

  /** 修飾子:public    外部公開, 修飾子がない場合はpublicになる */
  public name: string
  sexType: SexType
  
  /** 修飾子:private   外部公開しないので自分しか読み書きできない */
  private height: number
  private weight: number

  /** publicのoptional型で宣言. Optional型の場合はデータにundefinedチェックを行う */
  partner?: Human

  /** 修飾子:readonly  読み取り専用（定数） */
  readonly birthday: string	

  /** getter settter */
  get sexString(): String {
    return this.sexType === SexType.Man ? '男性' : '女性'
  }
  set sexString(value: String) {
    this.sexType = value === '男性' ? SexType.Man : SexType.Woman
  }


  /** 
   * コンストラクタはクラスのインスタンス（実体）が生成されたタイミングで処理される
   * */
  constructor(sexType: SexType, birthday: string) {
    this.sexType = sexType
    this.birthday = birthday    // コンストラクタの中で宣言できる
  }

  /** 
   * 関数
   * 修飾子を付けれる（public, privateなど） 修飾子がない場合はpublicになる
   * */
  setStatus(height: number, weight: number) {
    this.height = height
    this.weight = weight
  }

  introPartner(human: Human) {
    if (this.sexType != human.sexType) {
      this.partner = human
      human.partner = this
      this.showHonne()
    }
  }
 
  public showStatus() {
    console.log('name', this.name, 'height', this.height, 'weight', this.weight, 'birthday', this.birthday)
  }


  public showPartner() {
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

export function lessonClass() {
  /** クラスのインスタンスを生成するときは new クラス名() の書き方をする */
  const man: Human = new Human(SexType.Man, '1990/1/1')
  man.name = 'Taro'
  man.setStatus(170, 80)
  man.showStatus()                                  // name Taro height 170 weight 80 birthday 1990/1/1
  console.log(`${man.sexType}, ${man.sexString}`)   // 0, 男性
  man.sexString = '女性'
  console.log(`${man.sexType}, ${man.sexString}`)   // 1, 女性

  const woman: Human = new Human(SexType.Woman, '1992/1/1')
  woman.name = 'Hanako'
  woman.setStatus(150, 100)
  woman.showStatus()          // name Hanako height 150 weight 100 birthday 1992/1/1

  man.introPartner(woman)     // まぁいつ別れるか分からないけどね。これは独り言だから内緒だよ！
  man.showPartner()           // Taroのパートナーは Hanako
  woman.showPartner()         // Hanakoのパートナーは Taro
}