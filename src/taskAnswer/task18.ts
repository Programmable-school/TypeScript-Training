class Boss {
  private otakara: string = 'お宝の在りかは大阪上本町の上の方だよ！'
  protected getOtakara() {
    return this.otakara
  }
}

class Kobun extends Boss {
  /**
   * ヒント：Bossクラスで作ったメソッドを○○
   **/
  getOtakara() {
    return super.getOtakara()
  }
}

/**
 * 実行
 */
const kobun = new Kobun()
console.log(kobun.getOtakara()) // お宝の在りかは大阪上本町の上の方だよ！

