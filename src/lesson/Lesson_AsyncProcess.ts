/* 非同期処理 */
/*
    # HTTPクライアントのaxiosをインストール
    $ npm install --save axios

    Qiita APIを使ってデータを取得する
    概要（公式）： https://qiita.com/api/v2/docs
    概要（非公式だがわかりやすい）： https://qiita.com/tag1216/items/b0b90e30c7e581aa2b00
*/
import axios from 'axios' // axiosを利用するためインポートする
import { sleep } from '../utils/utils'

// Qiita APIのURLを定義
/*
   注意：リクエストしすぎるとリクエスト制限がかかる
*/
const userName: string = 'hukusuke1007' // 自分のアカウントを設定
const userListUrl: string = 'https://qiita.com/api/v2/users'
const userDetailUrl: string = `https://qiita.com/api/v2/users/${userName}`

export async function Lesson_AsyncProcess() {
  console.log('---- Lesson_AsyncProcess ----')
  const sleepTime: number = 1000 // 順番にコールするために待ち合わせする

  // ■ Callback
  LessonCallback()
  await sleep(sleepTime)

  // ■ Promise
  LessonPromise()
  await sleep(sleepTime)

  // ■ Async/Await
  LessonAsyncAwait()
  await sleep(sleepTime)
  
  // ■ PromiseAll
  LessonPromiseAll()
  await sleep(sleepTime)
  console.log('------------------\n')
}

// ■ Callback
function LessonCallback() {
  /* 
    userListUrlとuserDetailUrlをリクエストしてデータを取得する
    APIのURLとAPIから取得したデータを通知してほしい関数（コールバック関数）を指定する
  */
  // ユーザリストとユーザー情報を取得
  LessonCallbackAPIClient(userListUrl, (result?: any, error?: Error) => {
    // この中がコールバック関数. 外部との通信が終わると呼ばれる
    if (error) {
      console.error('LessonCallback userList error', error)
      return
    }
    if (result) {
      console.log('LessonCallback userList', result.data.length) // LessonCallback userList 20
    }
    
    LessonCallbackAPIClient(userDetailUrl, (result?: any, error?: Error) => {
      if (error) {
        console.error('LessonCallback userDetail error', error)
        return
      }
      if (result) {
        console.log('LessonCallback userDetail', result.data.profile_image_url)  // LessonCallback userDetail https://qiita-image-store.s3.amazonaws.com/0/183031/profile-images/1538072254
      }
      /* 
        このようにコールバックを利用する場合は
        何回も通信が必要になると関数がネストされていき大変見辛くなる（コードの可読性が悪い）
      */
    })
  }) 
}

function LessonCallbackAPIClient(url: string, callback: (result?: any, error?: Error) => void) {
  axios.get(url)
    .then((result: any) => {
      callback(result, undefined)
    }).catch((error: Error) => {
      callback(undefined, error)
    })
}

// ■ Promise
function LessonPromise() {
  // ユーザリストとユーザー情報を取得
  LessonPromiseAPIClient(userListUrl)
    .then((result: any) => {
      console.log('LessonPromise userList', result.data.length)   // LessonPromise userList 20
      return LessonPromiseAPIClient(userDetailUrl)
    }).catch((error: Error) => {
      console.error('error', error)
    }).then((result: any) => {
      console.log('LessonPromise userDetail', result.data.profile_image_url) // LessonPromise userDetail https://qiita-image-store.s3.amazonaws.com/0/183031/profile-images/1538072254
      /* 
        Promiseを利用する場合
        何回も通信が必要になるとthenを宣言的に書く。コールバックよりは可読性は良い
      */
    }).catch((error: Error) => {
      console.error('error', error)
    })
}

function LessonPromiseAPIClient(url: string)  {
  return new Promise((resolve, reject) => {
    axios.get(url)
    .then((result: any) => {
      resolve(result)
    }).catch((error: Error) => {
      reject(error)
    })
  })
}

// ■ Async/Await
async function LessonAsyncAwait() {
  try {
    // ユーザーリストを取得して１番目のユーザーの情報を取得する
    const result1 = await axios.get(userListUrl)            
    const id: string = result1.data[0].id
    console.log('LessonAsyncAwait', id)

    const result2 = await axios.get(userListUrl + `/${id}`)
    console.log('LessonAsyncAwait', id, result2.data.profile_image_url)
    /* 
      Async/Awaitを利用する場合
      通常の同期処理のように書けるため可読性が一番良い。
      注意としてawaitをする場合は関数をasyncにする必要がある。
    */
  } catch(error) {
    console.error('error', error)
  }
}

// ■ PromiseAll
// 複数の非同期処理をまとめてリクエストできる
function LessonPromiseAll() {
  Promise.all([
    LessonPromiseAPIClient(userListUrl),
    LessonPromiseAPIClient(userDetailUrl)
  ]).then((result: any[]) => {
    // 結果はPromiseが渡された順番で返される。
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
    console.log('LessonPromiseAll', result[0].data.length, result[1].data.profile_image_url) // LessonPromiseAll 20 https://qiita-image-store.s3.amazonaws.com/0/183031/profile-images/1538072254
  }).catch((error: Error) => {
    console.error('error', error)
  })
}