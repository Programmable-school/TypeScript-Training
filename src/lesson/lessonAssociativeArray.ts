/* 連想配列 */
export function lessonAssociativeArray() {
  const itemA: any = {
    name: 'Taro',
    age: 20
  }
  const itemB: any = {
    name: 'Hanako',
    age: 30
  }
  const itemC: any = {
    name: 'Ueda',
    age: 40
  }
  console.log(itemA) // { name: 'Taro', age: 20 }

  const items: any[] = [itemA, itemB]
  items.push(itemC)
  console.log(items) // [ { name: 'Taro', age: 20 },
                     //   { name: 'Hanako', age: 30 },
                     //   { name: 'Ueda', age: 40 } ]
}
