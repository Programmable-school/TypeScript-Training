/* Optional型 */
export function Lesson_Optional() {
  console.log('result1', Lesson4_1('shohei', 'developer'))  // result1 shoheiはdeveloper
  console.log('result1', Lesson4_1('shohei', undefined))    // result1 profileがundefinedです
  console.log('result1', Lesson4_1('shohei', null))         // result1 profileがnullです
}
function Lesson4_1(name: string, profile?: string): string {
  if (!profile) {
    return `profileが${profile}です`
  }
  return name + 'は' + profile
}
