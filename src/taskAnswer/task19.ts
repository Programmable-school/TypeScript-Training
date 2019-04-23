interface Phone {
  receive(name: string, phoneNumber: string): void
}

class PhoneHuman implements Phone {
  name: string
  phoneNumber: string
  friendInfo: Phone | null = null
  friend: PhoneHuman | null = null

  constructor(name: string, phoneNumber: string) {
    this.name = name
    this.phoneNumber = phoneNumber
  }

  setFriend(friend: PhoneHuman) {
    this.friend = friend
    this.friend.friendInfo = this
  }

  receive(name: string, phoneNumber: string) {
    console.log(`${this.name}です。`, `${name} くんから電話がきました。着信番号: ${phoneNumber}`)
  }

  call() {
    if (this.friendInfo !== null) {
      this.friendInfo.receive(this.name, this.phoneNumber)
    } else {
      console.log('友達をセットしてください。')
    }
  }
}

/**
 * 実行
 */
const shohei = new PhoneHuman('shohei', '08012345678')
const yamada = new PhoneHuman('山田', '09000000000')
shohei.setFriend(yamada)
yamada.call()               // shoheiです。 山田 くんから電話がきました。着信番号: 09000000000
yamada.setFriend(shohei)
shohei.call()               // 山田です。 shohei くんから電話きました。着信番号: 08012345678


