import { Lesson1, Lesson2, Lesson3, Lesson4, Lesson5, Lesson6, Lesson7, LessonXXX } from './lesson/Lesson'

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

/* Lesson_3 Any型 */
console.log('---- Lesson 3 ----')
Lesson3()
console.log('------------------')
console.log('')

/* Lesson_4 Optional型 */
console.log('---- Lesson 4 ----')
console.log('result1', Lesson4('shohei', 'developer'))
console.log('result1', Lesson4('shohei', undefined))
console.log('result1', Lesson4('shohei', null))
console.log('------------------')
console.log('')

/* Lesson_5 演算子 */
console.log('---- Lesson 5 ----')
Lesson5()
console.log('------------------')
console.log('')

/* Lesson_6 if分 */
console.log('---- Lesson 6 ----')
Lesson6()
console.log('------------------')
console.log('')

/* Lesson_7 比較演算子 */
console.log('---- Lesson 7 ----')
Lesson7()
console.log('------------------')
console.log('')

/* Lesson_XXX ジェネリクス */
console.log('---- Lesson XXX ----')
LessonXXX()
console.log('------------------')
console.log('')
