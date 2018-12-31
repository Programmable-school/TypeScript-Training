import { Lesson1, Lesson2, Lesson3, LessonXXX } from './lesson/Lesson'

/* Lesson_1 Hello! World.を表示 */
console.log('---- Lesson 1 ----')
Lesson1()
console.log('------------------')
console.log('')

/* Lesson_2 変数 */
console.log('---- Lesson 2 ----')
Lesson2()
console.log('------------------')
console.log('')

/* Lesson_3 Optional型 */
console.log('---- Lesson 3 ----')
console.log('result1', Lesson3('shohei', 'developer'))
console.log('result1', Lesson3('shohei', undefined))
console.log('result1', Lesson3('shohei', null))
console.log('------------------')
console.log('')

/* Lesson_XXX ジェネリクス */
console.log('---- Lesson XXX ----')
LessonXXX()
console.log('------------------')
console.log('')
