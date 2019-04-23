interface Profile {
  id: string
  name: string
}

class ProfileModel implements Profile {
  id: string
  name: string
  constructor(profile: Profile) {
    this.id = profile.id
    this.name = profile.name
  }

  values(): any {
    return {
      id: this.id,
      name: this.name
    } 
  }

  getProfile(): Profile {
    return {
      id: this.id,
      name: this.name
    }
  }
}

function referenceAndCopy() {
  {
    /** 
     * 参照渡し 
     * profileAを代入したprofileBの値を変更するとprofileAにも反映される
     * */
    const profileA: ProfileModel = new ProfileModel({ id: '0', name: 'yamada' })
    const profileB: ProfileModel = profileA
    profileB.id = '1'
    profileB.name = 'hanako'
    console.log('参照渡し', profileA) // 参照渡し ProfileModel { id: '1', name: 'hanako' }
    console.log('参照渡し', profileB) // 参照渡し ProfileModel { id: '1', name: 'hanako' }
  }

  {
    /** 
     * 値渡し 
     * profileAを値渡しでコピーすることで値を変更してもprofileAには反映されない。
     * */
    let profileA: ProfileModel = new ProfileModel({ id: '0', name: 'yamada' })

    const copyA: any = profileA.values()
    const copyB: Profile = profileA.getProfile()
    const copyC: ProfileModel = Object.assign({}, profileA)
    copyA.id = '1'
    copyA.name = 'hanako'
    copyB.id = '2'
    copyB.name = 'taro'
    copyC.id = '3'
    copyC.name = 'tanaka'
    console.log('値渡し', profileA.values())  // 値渡し { id: '0', name: 'yamada' }
    console.log('値渡し', copyA)              // 値渡し { id: '1', name: 'hanako' }
    console.log('値渡し', copyB)              // 値渡し { id: '2', name: 'taro' }
    console.log('値渡し', copyC)              // 値渡し { id: '3', name: 'tanaka' }
  }
}

/** 実行 */
referenceAndCopy()
 


