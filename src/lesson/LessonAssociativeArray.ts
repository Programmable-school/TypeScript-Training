/* 連想配列 */
export function lessonAssociativeArray() {
  const itemA: any = {
    name: 'Taro',
    age: 20
  }
  const itemB: { name: string, age: number } = {
    name: 'Hanako',
    age: 30
  }
  const itemC: { name?: string, age?: number } = {}
  
  const items: { name?: string, age?: number}[] = [itemA, itemB]
  itemC.name = 'Ueda'
  itemC.age = 40
  items.push(itemC)

  console.log(itemA) // { name: 'Taro', age: 20 }
  console.log(items) // [ { name: 'Taro', age: 20 },
                     //   { name: 'Hanako', age: 30 },
                     //   { name: 'Ueda', age: 40 } ]
}
