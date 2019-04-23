# TypeScript入門

> 初心者向け TypeScript入門トレーニング。

## 目次
- [環境構築](https://github.com/Programmable-school/TypeScript-Training#%E6%89%8B%E9%A0%86)
- [Hello! World.を表示](./lesson/lessonHelloWorld.ts)
- [変数と定数](./lesson/lessonLetConst.ts)
- [関数](./lesson/lessonFunction.ts)
- [プリミティブ型、Any型](./lesson/lessonPriAny.ts)
- [Optional型](./lesson/lessonOptional.ts)
- [演算子](./lesson/lessonCalc.ts)
- [配列](./lesson/lessonArray.ts)
- [連想配列](./lesson/lessonAssociativeArray.ts)
- [リスト操作](./lesson/lessonListOperation.ts)
- [if分（条件判断）](./lesson/lessonIf.ts)
- [比較演算子](./lesson/lessonCompare.ts)
- [AND・OR, 三項演算子](./lesson/lessonAndOr.ts)
- [switch文（条件判断）](./lesson/lessonSwitch.ts)
- [while文（繰り返し）](./lesson/lessonWhile.ts)
- [for文（繰り返し）](./lesson/lessonFor.ts)
- [Enum](./lesson/lessonEnum.ts)
- [クラス ](./lesson/lessonClass.ts)
- [キャスト変換（型変換）](./lesson/lessonCast.ts)
- [数学計算（Math）](./lesson/lessonMath.ts)
- [日付関数（Date）](./lesson/lessonDate.ts)
- [static](./lesson/lessonStatic.ts)
- [継承](./lesson/lessonInheritance.ts)
- [インターフェース](./lesson/lessonInterface.ts)
- [ジェネリクス](./lesson/lessonGenerics.ts)
- [非同期処理](./lesson/lessonAsyncProcess.ts)
- [ReactiveX](./lesson/lessonReactiveX.ts)
- [課題](#課題)

## 学習
TypeScriptを実行できる環境を構築し、目次の順番にコードを写経しています。<br>

### 環境構築
あなたのパソコンのコマンドターミナルを立ち上げ、以下の手順で環境を構築します。<br>
```bash
# ディレクトリ作成して移動
$ mkdir beginner_lesson
$ cd beginner_lesson

# pacage.json作成
$ npm init -y

# TypeScriptと型定義ファイルをインストール
$ npm install --save-dev typescript
$ npm install --save @types/node

# ソースコードを保管するディレクトリを作成
$ mkdir src

# ビルドしたJavaScriptファイルを保管するディレクトリを作成
$ mkdir build
```
エディタでpackage.jsonを開きます。scriptsにbuildとstartのショートカットコマンドを追加します。
```json
  "scripts": {
    "build": "node_modules/.bin/tsc",
    "start": "node build/app.js",
    "serve": "npm run build && npm run start",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

エディタを用いてtsconfig.jsonを作成します。
内容は以下のコードを記載し保存します。
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2017",
    "sourceMap": true,
    "types": ["node"],
    "outDir": "./build/"
  },
  "exclude": [
    "node_modules"
  ]
}
```

### Hello! world.を表示する
src配下にapp.tsを作成し、エディタで以下のコードを実装して保存します。
```typescript
console.log("Hello! world.")
```

作成したapp.tsをビルドしてapp.jsにします。
```bash
# ビルド
$ npm run build

# app.jsが作成されていることを確認
$ ls build/
app.js		app.js.map
```

app.jsを実行します。
```bash
# 実行
$ npm run start
Hello! world.
```
無事、表示されました。

また、先ほどscriptsに追加したserveを使えば1回でビルドと実行をしてくれます。
```bash
# ビルド後に実行
$ npm run serve
Hello! world.
```
おめでとうございます。環境構築からHelo! world.を表示させることができました。<br>

### 変数と定数 〜 ReactiveX
[目次](#目次)に沿って学習していきます。<br>
ソースコードに書かれている通りに写経し、どのように動作するのかconsole.logを使って確認していきましょう。<br>
[Lesson](https://github.com/Programmable-school/TypeScript-Training/tree/master/src/lesson)<br>

## 答え合わせ
本リポジトリをローカルPCへ取り込み、全Lessonのソースコード及び挙動を確認できます。<br>
あなたが写経したコードの答え合わせができます。<br>
```bash
├── LICENSE
├── README.md
├── package.json
├── src
│   ├── app.ts
│   ├── app_async.ts
│   ├── app_rxjs.ts
│   ├── lesson
│   │   ├── lessonAndOr.ts
│   │   ├── ....
│   │   ├── ....
│   │   ├── ....
│   │   ├── lessonWhile.ts
│   └── utils
│       └── utils.ts
└── tsconfig.json
```

以下の手順で実行してください。<br>
```bash
# TypeScript-Trainingをダウンロード
$ git clone https://github.com/Programmable-school/TypeScript-Training.git
$ cd TypeScript-Training/

# packageをダウンロード
$ npm install

# Lessonコードをビルド＆実行
$ npm run lesson

# 非同期処理のLessonを実行
$ npm run lesson-async

# ReactiveXのLessonを実行
$ npm run lesson-rxjs
```

以上です。

## 課題
### 課題 1
「こんにちは」と返す関数を実装してください。

実行結果

```typescript
console.log(getHello()) // こんにちは
```

```typescript
/**
 *  「こんにちは」を取得する
 *  @return {string} 文字列
 */
function getHello(): string
```

### 課題 2
時間によって挨拶を返す関数を実装してください。

-  5時 - 11時： おはようございます
- 12時 - 18時： こんにちは
- 18時 - 0時：  こんばんは
-  1時 - 4時：  夜更かしさん

実行結果

```typescript
console.log(getHelloWithDate()) // こんばんは ※時間帯によって異なる
```

```typescript
/**
 *  時間によって挨拶を返す関数
 *  @return {string} 文字列
 */
function getHelloWithDate(): string
```

### 課題 3
for文またはwhile文を使って、数字を0から100まで表示する関数を実装してください。

数字と数字の間は空白を入れるようにしてください。

実行結果

```typescript
showHundred1() // 0 1 2 3 4 5 ... 95 96 97 98 99 100 
```

```typescript
/**
 *  0から100までを表示する
 *  @return {void}
 */
function showHundred1()
```

### 課題 4
数字を0から100まで表示する関数を実装してください。

但し、5の倍数ごとに改行してください。


実行結果
```typescript
/**
 * 0 1 2 3 4 5 
 * 6 7 8 9 10 
 *   ......
 * 91 92 93 94 95 
 * 96 97 98 99 100 
 */
showHundred2()
```

```typescript
/**
 *  0から100までを表示する。5の倍数ごとに改行する。
 *  @return {void}
 */
function showHundred2()
```

### 課題 5
3つの文字列を連結した文字列を返す関数を実装してください

実行結果

```typescript
console.log(mergeString('俺は', '明日', '勉強する')) // 俺は明日勉強する
```

```typescript
/**
 *  3つの文字列を連結した文字列を返す
 *  @param {string} str1 文字列1
 *  @param {string} str2 文字列2
 *  @param {string} str3 文字列3
 *  @return {string} 連結した文字列
 */
function mergeString(str1: string, str2: string, str3: string): string
```

### 課題 6
3つの文字列を１つの配列で返す関数を実装してください。

実行結果

```typescript
console.log(getArrayString('俺は', '明日', '勉強する')) // [ '俺は', '明日', '勉強する' ]
```

```typescript
/**
 *  テキストから任意のワードを検索する
 *  @param {string} str1 文字列1
 *  @param {string} str2 文字列2
 *  @param {string} str3 文字列3
 *  @return {string[]} 連結した文字列配列
 */
function getArrayString(str1: string, str2: string, str3: string): string[]
```

### 課題 7
足し算、引き算、掛け算、割り算する関数を実装してください。

実行結果

```typescript
const a = 10;
const b = 2;
console.log('Add', calc(a, b, CalcType.Add))      // Add 12
console.log('Sub', calc(a, b, CalcType.Sub))      // Sub 8
console.log('Multi', calc(a, b, CalcType.Multi))  // Multi 20
console.log('Div', calc(a, b, CalcType.Div))      // Div 5
```

```typescript
/**
 *  二つの値の足し算、引き残、掛け算、割り算の計算
 *  @param {number} a 値
 *  @param {number} b 値
 *  @param {CalcType} type 計算種別（enumで定義してください。）
 *  @return {number} 出力結果
 */
function calc(a: number, b: number, type: CalcType): number
```
### 課題 8
配列の値を指定された倍数分掛け算した配列にして返す関数を実装してください。

実行結果

```typescript
console.log('multiple', multiple([10, 2, 4, 1], 3)) // multiple [ 30, 6, 12, 3 ]
```

```typescript
/**
 *  配列を任意の倍数にする
 *  @param {number[]} nums 対象データ配列
 *  @param {number} multiple 倍数
 *  @return {number[]} 出力結果 multipleの値で掛けたnumsの結果
 */
function multiple(nums: number[], multiple: number): number[]
```

### 課題 9
以下の*をコンソール上に描画する関数を実装してください。

実行結果

```typescript
// isReverse: false
*
**
***
****
*****

// isReverse: true
*****
****
***
**
*
```

```typescript
/**
 *  * を描画する
 *  @param {number} size *の最大個数
 *  @param {boolean} isReverse true:*が多い順に表示, false：*が少ない順に表示
 *  @return {void}
 */
function drawAsterisk1(size: number, isReverse: boolean) {
  let result: string = ''
  /**
   * for文とif文を使ってresultに*を連結して作成してください。
   */
  console.log(result)
}
```

### 課題 10
以下の*をコンソール上に描画する関数を実装してください。

実行結果

```typescript
// isReverse: false
    *
   **
  ***
 ****
*****

// isReverse: true
*****
 ****
  ***
   **
    *
```

```typescript
/**
 *  * を描画する
 *  @param {number} size *の最大個数
 *  @param {boolean} isReverse true:*が多い順に表示, false：*が少ない順に表示
 *  @return {void}
 */
function drawAsterisk2(size: number, isReverse: boolean) {
  let result: string = ''
  /**
   * for文とif文を使ってresultに*を連結して作成してください。
   */
  console.log(result)
}
```
### 課題 11
以下の*をコンソール上に描画する関数を実装してください。

実行結果

```typescript
// isReverse: false
*
 *
  *
   *
    *

// isReverse: true
    *
   *
  *
 *
*
```

```typescript
/**
 *  * を描画する
 *  @param {number} size *の個数
 *  @param {boolean} isReverse true:*が多い順に表示, false：*が少ない順に表示
 *  @return {void}
 */
function drawAsterisk3(size: number, isReverse: boolean) {
  let result: string = ''
  /**
   * for文とif文を使ってresultに*を連結して作成してください。
   */
  console.log(result)
}
```

### 課題 12
以下の文字列から任意の文字列が含まれていれば true を返す関数を実装してください。

文字列（sentence1）

```
TypeScript はマイクロソフトによって開発され、メンテナンスされているフリーでオープンソースのプログラミング言語である。TypeScriptはJavaScriptに対して、省略も可能な静的型付けとクラスベースオブジェクト指向を加えた厳密なスーパーセットとなっている。C# のリードアーキテクトであり、DelphiとTurbo Pascalの開発者でもあるアンダース・ヘルスバーグが TypeScript の開発に関わっている。TypeScriptはクライアントサイド、あるいはサーバサイド (Node.js) で実行されるJavaScriptアプリケーションの開発に利用できる。
```

実行結果

```typescript
console.log(isSearchText(sentence1, 'TypeScript'))   // true
console.log(isSearchText(sentence1, 'メンテナンス'))   // true
console.log(isSearchText(sentence1, 'shohei'))       // false
```

```typescript
/**
 *  テキストから任意のワードを検索する
 *  @param {string} text 検索対象のテキスト
 *  @param {string} searchWord 検索するワード
 *  @return {boolean} 出力結果 true:存在する false:存在しない
 */
function isSearchText(text: string, searchWord: string): boolean
```

### 課題 13
課題 3 の関数を改良して検索ワードにヒットした回数を返す関数を実装してください。

ヒント：[正規表現](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions)

実行結果

```typescript
console.log(searchText(sentence2, 'TypeScript'))    // 4
console.log(searchText(sentence2, 'プログラミング'))  // 1
console.log(searchText(sentence2, 'shohei'))        // 0
```

```typescript
/**
 *  テキストから任意のワードを検索する
 *  @param {string} text 検索対象のテキスト
 *  @param {string} searchWord 検索するワード
 *  @return {number} 出力結果 検索ヒットした回数
 */
function searchText(text: string, searchWord: string): number
```

### 課題 14
数字を並べ替えする関数を実装してください。ソートアルゴリズムは挿入ソート。<br>
[挿入ソートWiki](https://ja.wikipedia.org/wiki/%E6%8C%BF%E5%85%A5%E3%82%BD%E3%83%BC%E3%83%88)<br>
[挿入ソートの例](https://programming-place.net/ppp/contents/algorithm/sort/004.html)<br>


実行結果

```typescript
console.log(sort([8, 4, 3, 7, 6, 5, 2, 1], true))   // [ 8, 7, 6, 5, 4, 3, 2, 1 ]
console.log(sort([8, 4, 3, 7, 6, 5, 2, 1], false))  // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(sort([800, 4, 30, 700, 60, 5, 10, 1, 10], true))   // [ 800, 700, 60, 30, 10, 10, 5, 4, 1 ]
console.log(sort([800, 4, 30, 700, 60, 5, 10, 1, 10], false))  // [ 1, 4, 5, 10, 10, 30, 60, 700, 800 ]
```


```typescript
/**
 *  配列のソート（挿入ソート）
 *  @param {number[]} nums ソート対象の値配列
 *  @param {boolean} isDesc 降順でのソートフラグ true:降順 false:昇順
 *  @return {number[]} 出力結果
 */
function sort(nums: number[], isDesc: boolean): number[]
```

### 課題 15
数字をカウントダウンする関数を実装してください。

ヒント：setIntervalを使います。

実行結果

```typescript
countDownTimer(5) // 1秒ごとに5 ... 0とカウントダウンして処理が終了する
```

```typescript
/**
 *  カウントダウンする
 *  @param {number} maxTime 
 *  @return {void}
 */
function countDownTimer(maxTime: number)
```

### 課題 16
{ key: value } の形式データを取得する関数を実装してください。


実行結果

```typescript
console.log(getKeyValues('0', 'shohei')) // { id: '0', value: 'shohei' }
```

```typescript
/**
 *  key: valueの形式でデータを取得する
 *  @return {any} key: valueの形式
 */
function getKeyValues(id: string, value: string): any
```


### 課題 17
{ key: value } の形式データからnull以外の値を出力する関数を実装してください。

実行結果

```typescript
const inputKeyValues1 = {
  id: '100',
  name: 'shohei',
  age: null,
  birthday: '1988/10/07',
  hobby: null,
}
const inputKeyValues2 = {
  tamago: null,
  ringo: 'apple',
  doraemon: null,
  banana: null,
  gohan: null,
}
console.log(normKeyValues(inputKeyValues1)) // { id: '100', name: 'shohei', birthday: '1988/10/07' }
console.log(normKeyValues(inputKeyValues2)) // { ringo: 'apple' }
```

```typescript
/**
 *  key: valueのデータでnull以外のデータに正規化する
 *  @param {any} データ
 *  @return {any} 正規化した結果
 */
function normKeyValues(data: any): any
```

### 課題 18
スーパークラスのprivate変数をサブクラスが取得できるよう実装してください。

実行結果

```typescript
const kobun = new Kobun()
console.log(kobun.getOtakara()) // お宝の在りかは大阪上本町の上の方だよ！
```

穴埋め形式

```typescript
class Boss {
  private otakara: string = 'お宝の在りかは大阪上本町の上の方だよ！'
  protected getOtakara(): string {
    /**
     * 【KADAI】ここを実装してください。
     *  ヒント：文字列を返すすように実装することを考えると.....？
     * */
  }
}

class Kobun extends Boss {
  /**
   * 【KADAI】ここを実装してください。
   *  ヒント：Bossクラスで作ったメソッドをオーバーライドして.....？
   * */
}

```

### 課題 19
以下のクラス関係において、実行結果通りに動作するよう実装してください。

ヒント：interfaceクラスのメソッドをオーバーライドして結果を表示する。


実行結果

```typescript
const shohei = new PhoneHuman('shohei', '08012345678')
const yamada = new PhoneHuman('山田', '09000000000')
shohei.setFriend(yamada)
yamada.setFriend(shohei)

/** 
 * callすることでセットされたfriendのreceive内のログを表示するよう実装する
 * */
shohei.call()   // 山田です。 shohei くんから電話きました。着信番号: 08012345678
yamada.call()   // shoheiです。 山田 くんから電話がきました。着信番号: 09000000000
```


穴埋め形式

```typescript
interface Phone {
  /**
   * 【KADAI】ここを実装してください。 
   * */
}

class PhoneHuman implements Phone {
  name: string
  phoneNumber: string
  friendInfo: Phone | null = null
  friend: PhoneHuman | null = null

  constructor(name: string, phoneNumber: string) {
    this.name = name
    this.phoneNumber = phoneNumber
  }

  setFriend(friend: PhoneHuman) {
    /**
     * 【KADAI】ここを実装してください。
     **/
  }

  receive(name: string, phoneNumber: string) {
    console.log(`${this.name}です。`, `${name} くんから電話がきました。着信番号: ${phoneNumber}`)
  }

  call() {
    /**
     * 【KADAI】ここを実装してください。
     **/
  }
}

```

### 課題 20
参照渡しと値渡しの課題です。<br>
→ [参照渡しと値渡しとは](https://wa3.i-3-i.info/word16070.html)

profileAオブジェクトのデータを値渡しして、新しいオブジェクトを生成してください。<br>
ただし、値渡しで以下の型で新しいオブジェクトを作成してください。
- any
- Profile
- ProfileModel

コメントアウト上の「KADAI」箇所を実装してください。

ヒント：[Object.assing](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

実行結果

```typescript
/**
 * 以下の内容がコンソールログに表示される。
 * 
 * 参照渡し ProfileModel { id: '1', name: 'hanako' }
 * 参照渡し ProfileModel { id: '1', name: 'hanako' }
 * 値渡し { id: '0', name: 'yamada' }
 * 値渡し { id: '1', name: 'hanako' }
 * 値渡し { id: '2', name: 'taro' }
 * 値渡し { id: '3', name: 'tanaka' }
 * */

```

穴埋め形式
```typescript
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
    /**
     * 【KADAI】ここを実装してください。
     * */
  }

  /**
   * 【KADAI】ここにProfile型で値を返す関数を実装してください。
   * */
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
    const copyB: Profile = /* 【KADAI】ここを実装してください。 */
    const copyC: ProfileModel = /* 【KADAI】ここを実装してください。 */
    copyA.id = '1'
    copyA.name = 'hanako'
    copyB.id = '2'
    copyB.name = 'taro'
    copyC.id = '3'
    copyC.name = 'tanaka'
    console.log('値渡し', profileA.values())
    console.log('値渡し', copyA)
    console.log('値渡し', copyB)
    console.log('値渡し', copyC)
  }
}

/** 実行 */
referenceAndCopy() 
```


### 答え
課題の答えは[こちら](./task_answer)です。