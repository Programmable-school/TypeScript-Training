/* ReactiveX */
/*
    ・公式サイト
    http://reactivex.io/

    ・Github
    https://github.com/ReactiveX/rxjs
    
    # ReactiveXのJavaScript版のrxjsをインストール
    $ npm install --save rxjs

    # HTTPクライアントのaxiosをインストール
    $ npm install --save axios
 */
// RxJSをインポートする
import { Observable, BehaviorSubject, from, zip, empty } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

import axios, { AxiosResponse } from 'axios' 
import { sleep } from '../utils/utils'

// Qiita APIのURLを定義
/*
   注意：リクエストしすぎるとリクエスト制限がかかる
*/
const userName: string = 'hukusuke1007' // 自分のアカウントを設定
const userListUrl: string = 'https://qiita.com/api/v2/users'
const userDetailUrl: string = `https://qiita.com/api/v2/users/${userName}`

/*
  Observable: ストリーム（データを流す通路）
  BehaviorSubject: 最後のデータを保持する。onNextで新しいデータを流し、subscribeとvalueでデータを取得できる
  from: 引数に指定されたデータのObservableを生成
  zip: 複数のObservableから流れてきたデータを組み合わせて単一のデータにする
  empty: 何のデータを持っていないObservableを生成
  map: pip内で使えるmap。機能はリスト操作のmapと同じ
  catchError: pip内で発生したエラーをキャッチ
*/

export async function Lesson_ReactiveX() {
  console.log('---- Lesson_ReactiveX ----')
  const sleepTime: number = 1000 // 順番にコールするために待ち合わせする

  // ■ Rxで値を加工する
  LessonRxProcess()

  // ■ Rxでデータバインディングのようなことをする
  LessonRxBinding()

  // ■ RxでAPIのレスポンスを取得する
  LessonRxApiRequest()
  await sleep(sleepTime)

  // ■ RxでPromiseAllのようなことをする
  LessonRxPromiseAll()
  await sleep(sleepTime)

  // ■ RxでAsync/Awaitのようなことをする
  LessonRxAsyncAwait()
  await sleep(sleepTime)
  console.log('------------------\n')
}

// ■ Rxで値を加工する
function LessonRxProcess() {
  /* 
    Observable = ストリーム（データを流せれる通路）
    subscribeをするとデータをストリームへ流して処理できる
  */
  const o1: Observable<number> = from([1, 2, 3, 4, 5])
  const o2: Observable<string> = from(['A', 'B', 'C', 'D', 'E'])

  o1.subscribe((value: number) => {
    console.log('RxProcess o1', value)     // RxProcess o1 1 ... RxProcess o1 5 の順に表示される
  })

  // o1に流れてくる値を加工してストリームへ流す
  o1.pipe(
    map((x:number) => x * 2)
  ).subscribe((value: number) => {
    console.log('RxProcess o1', value)    // RxProcess o1 2 ... RxProcess o1 10 の順に表示される
  })

  // o1からo2へ順番にストーリムへ流す
  const list1: number[] = [1, 2, 3, 4, 5]
  const list2: string[] = ['A', 'B', 'C', 'D', 'E']
  const o3: Observable<number[] | string[]> = from([list1, list2]).pipe(
    map((value: number[] | string[]) => {
      let result: number[] | string[] = value
      if (typeof value[0] === 'number') {
        result = (value as number[]).map((x: number) => x * 2)
      }
      if (typeof value[0] === 'string') {
        result = (value as string[]).map((x: string) => x + x)
      }
      return result
    })
  )
  o3.subscribe((value) => {
    console.log('RxProcess o3', value) // RxProcess o3 [ 2, 4, 6, 8, 10 ] ... RxProcess o3 [ 'AA', 'BB', 'CC', 'DD', 'EE' ] の順に表示される
  })

  // o1とo2の値を結合してストリームへ流す
  const o4: Observable<string> = zip(o1, o2).pipe(
    map(([o1Value, o2Value]) => `${o2Value}: ${o1Value}`)
  )
  o4.subscribe((value: string) => {
    console.log('RxProcess o4', value)   // RxProcess o4 A: 1 ... RxProcess o4 E: 5 の順に表示される
  })
}

// ■ Rxでデータバインディングのようなことをする
function LessonRxBinding() {
  const o1: BehaviorSubject<number> = new BehaviorSubject(1)
  const o2: BehaviorSubject<string> = new BehaviorSubject('A')
  console.log(`RxBinding o1 ${o1.value}, o2 ${o2.value}`)     // RxBinding o1 1, o2 A

  // o1をsubscribeしてo2の値を変える
  o1.subscribe((value: number) => {
    switch(value) {
      case 2:
        o2.next('B')
        break
      case 3:
        o2.next('C')
        break
      case 4:
        o2.next('D')
        break
      case 5:
        o2.next('E')
        break
      default:
        o2.next('A')
    }
  })

  /* 
    onNextでsubscribeで値を取得できる。
    subscribe内に処理を書けばo1の値によってユニークな処理を実現できる。
  */
  o1.next(2)
  console.log(`RxBinding o1 ${o1.value}, o2 ${o2.value}`)   // RxBinding o1 2, o2 B

  o1.next(3)
  console.log(`RxBinding o1 ${o1.value}, o2 ${o2.value}`)   // RxBinding o1 3, o2 C

  o1.next(4)
  console.log(`RxBinding o1 ${o1.value}, o2 ${o2.value}`)   // RxBinding o1 4, o2 D

  o1.next(5)
  console.log(`RxBinding o1 ${o1.value}, o2 ${o2.value}`)   // RxBinding o1 5, o2 E
}

// ■ RxでAPIのレスポンスを取得する
function LessonRxApiRequest() {
  // ユーザー情報を取得
  LessonRxAPIClient(userDetailUrl).subscribe(
    (result: AxiosResponse) => {
      console.log('RxApiRequest', result.data.profile_image_url)  // RxApiRequest https://qiita-image-store.s3.amazonaws.com/0/183031/profile-images/1538072254
    }, (error: Error) => {
      console.error('error', error)
    })
}

// ■ RxでPromiseAllのようなことをする
function LessonRxPromiseAll() {
  // ユーザーリストとユーザー情報を取得
  zip(LessonRxAPIClient(userListUrl), LessonRxAPIClient(userDetailUrl)).pipe(
    map(([result1, result2]) => `${result1.data.length} ${result2.data.profile_image_url}` )
  ).subscribe((result: string) => {
    console.log('RxPromiseAll', result)   // RxPromiseAll 20 https://qiita-image-store.s3.amazonaws.com/0/183031/profile-images/1538072254
  }, (error: Error) => {
    console.error('error', error)
  })
}

// ■ RxでAsync/Awaitのようなことをする
function LessonRxAsyncAwait() {
  // ユーザーリストを取得して１番目のユーザーの情報を取得する
  LessonRxAPIClient(userListUrl).pipe(
    map(response => {
      const id: string = response.data[0].id
      console.log('RxAsyncAwait', id)
      return LessonRxAPIClient(userListUrl + `/${id}`).toPromise()
    }),
    catchError((error, caught) => {
      console.error('error', error)
      return empty()
    })
  ).subscribe((promise: Promise<AxiosResponse<any>>) => {
    promise.then((result: AxiosResponse) => {
       console.log('RxAsyncAwait', result.data.id, result.data.profile_image_url)
     }).catch((error: Error) => {
       console.error('error', error)
     })
  })
}


function LessonRxAPIClient(url: string)  {
  return from(axios.get(url))
}