/* Optional型 */
export function lessonOptional() {
  console.log('result1', func1('taro', 'developer'))  // result1 taroはdeveloper
  console.log('result1', func1('taro', undefined))    // result1 profileがundefinedです
  console.log('result1', func1('taro', null))         // result1 profileがnullです
}
function func1(name: string, profile?: string): string {
  if (!profile) {
    return `profileが${profile}です`
  }
  return name + 'は' + profile
}
