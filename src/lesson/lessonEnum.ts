/* Enum */
enum SocialType {
  Twitter = 0,
  Facebook,
  Instagram 
}
export function lessonEnum() {
  let type: SocialType = SocialType.Twitter
  let typeNum: number = SocialType.Twitter.valueOf()
  console.log(type)     // 0
  console.log(typeNum)  // 0

  type = SocialType.Facebook
  typeNum = SocialType.Facebook.valueOf()
  console.log(type)     // 1
  console.log(typeNum)  // 1

  type = SocialType.Instagram
  typeNum = SocialType.Instagram.valueOf()
  console.log(type)     // 2
  console.log(typeNum)  // 2
}
