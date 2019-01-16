/* 継承
  共通のメンバ・メソッドがある場合は親クラス（スーパークラス）を作成し、
  親クラスを継承する子クラス（サブクラス）を用意することで子クラスは親クラスの持ち物を利用できる。
  
  修飾子によってアクセス制限できる
    public: 誰でも利用できる
    private: 親クラスのみ利用できる
    protected: 親クラスと子クラスのみ利用できる。外部からアクセスはできない
*/
export function Lesson_Inheritance() {
  // Engineerの社員を生成
  const employee1: Employee = new Employee(0)
  employee1.setProfile('Taro', 'President')
  const info1: any = employee1.getMyInfo()
  console.log(employee1.name, info1)          // Taro { name: 'Taro', tel: '0120000000', id: 0, profile: 'President' }
  
  // Marketingの社員を生成
  const employee2: Employee = new Employee(1)
  employee2.setProfile('Hanako', 'Engineer')
  const info2: any = employee2.getMyInfo()
  console.log(employee2.name, info2)          // Hanako { name: 'Hanako', tel: '0120000000', id: 1, profile: 'Engineer' }

  // 親クラスのprivateは親クラスのみアクセスできる
  const hesokuriResult1: string = employee1.getHesokuri()   
  const hesokuriResult2: string = employee2.getHesokuri()
  console.log(employee1.name, hesokuriResult1)  // Taro 会社のへそくりは　1円
  console.log(employee2.name, hesokuriResult2)  // Hanako 社長じゃないから分からない
  // employee1.hesokuri   // 呼ぶことはできない
  
  // protectedは親クラスと子クラスのみアクセスできる
  employee1.checkAsset()                        // Company Asset: 100000000
  // employee1.asset      // 呼ぶことはできない
  
}
/**
 * スーパークラス
 * override及びサブクラス化できる。
 */
class CompanyEmployee {
  companyName: string	            // 会社名
  companyTel: string	            // 会社の電話番号
  employeeId: number	            // 社員ID
  protected asset: number	        // 会社の資産
  private hesokuri: number        // 会社のへそくり
  constructor() {
    this.companyName = 'Develop Inc.'
    this.companyTel = "0120000000"
    this.asset = 100_000_000
    this.hesokuri = 1
  }

  getCompanyInfo() {
    return {
      name: this.companyName,
      tel: this.companyTel
    }
  }

  // 社員IDが0（社長）だけ教える
  getHesokuri(id: number): string {
    return id === 0 ? `会社のへそくりは　${this.hesokuri}円` : '社長じゃないから分からない'
  }
}

/**
 * サブクラス
 * CompanyEmployeeを継承する。
 */
class Employee extends CompanyEmployee {
  name: string
  profile: string
  constructor(id: number) {
    super()                 // CompanyEmployeeのコンストラクタを呼ぶ
    this.employeeId = id	  // CompanyEmployeeのメンバを使える
  }
  setProfile(name: string, profile: string) {
    this.name = name
    this.profile = profile
  }

  getMyInfo(): any {
    const info: any = super.getCompanyInfo()
    info['id'] = this.employeeId
    info['name'] = this.name
    info['profile'] = this.profile
    return info
  }

  checkAsset() {
    console.log(`Company Asset: ${this.asset}`)
  }

  getHesokuri() {
    return super.getHesokuri(this.employeeId)
  }

}
