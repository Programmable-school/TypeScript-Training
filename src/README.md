# TypeScript入門

> 初心者向け TypeScript入門トレーニング。

## 目次
- [環境構築](https://github.com/Programmable-school/TypeScript-Training#%E6%89%8B%E9%A0%86)
- [Hello! World.を表示](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_HelloWorld.ts)
- [変数と定数](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_LetConst.ts)
- [関数](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Function.ts)
- [プリミティブ型、Any型](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_PriAny.ts)
- [Optional型](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Optional.ts)
- [演算子](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Calc.ts)
- [配列](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Array.ts)
- [連想配列](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_AssociativeArray.ts)
- [リスト操作](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_ListOperation.ts)
- [if分（条件判断）](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_If.ts)
- [比較演算子](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Compare.ts)
- [AND・OR, 三項演算子](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_AndOr.ts)
- [switch文（条件判断）](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Switch.ts)
- [while文（繰り返し）](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_While.ts)
- [for文（繰り返し）](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_For.ts)
- [Enum](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Enum.ts)
- [クラス ](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Class.ts)
- [キャスト変換（型変換）](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Cast.ts)
- [数学計算（Math）](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Math.ts)
- [日付関数（Date）](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Date.ts)
- [static](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Static.ts)
- [継承](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Inheritance.ts)
- [インターフェース](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Interface.ts)
- [ジェネリクス](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Generics.ts)
- [非同期処理](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_AsyncProcess.ts)
- [ReactiveX](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_ReactiveX.ts)
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
│   │   ├── Lesson_AndOr.ts
│   │   ├── Lesson_Array.ts
│   │   ├── Lesson_AssociativeArray.ts
│   │   ├── Lesson_AsyncProcess.ts
│   │   ├── Lesson_Calc.ts
│   │   ├── Lesson_Cast.ts
│   │   ├── Lesson_Class.ts
│   │   ├── Lesson_Compare.ts
│   │   ├── Lesson_Date.ts
│   │   ├── Lesson_Enum.ts
│   │   ├── Lesson_For.ts
│   │   ├── Lesson_Function.ts
│   │   ├── Lesson_Generics.ts
│   │   ├── Lesson_HelloWorld.ts
│   │   ├── Lesson_If.ts
│   │   ├── Lesson_Inheritance.ts
│   │   ├── Lesson_Interface.ts
│   │   ├── Lesson_LetConst.ts
│   │   ├── Lesson_ListOperation.ts
│   │   ├── Lesson_Math.ts
│   │   ├── Lesson_Optional.ts
│   │   ├── Lesson_PriAny.ts
│   │   ├── Lesson_ReactiveX.ts
│   │   ├── Lesson_Static.ts
│   │   ├── Lesson_Switch.ts
│   │   └── Lesson_While.ts
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
足し算、引き残、掛け算、割り算を計算する関数を作ってください。


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
### 課題 2
配列の値を指定された倍数分掛け算した配列にして返す関数を作ってください。
<br>

```typescript
/**
 *  配列を任意の倍数にする
 *  @param {number[]} nums 対象データ配列
 *  @param {number} multiple 倍数
 *  @return {number[]} 出力結果 multipleの値で掛けたnumsの結果
 */
function multiple(nums: number[], multiple: number): number[]
```

### 課題 3
以下の文字列から任意の文字列が含まれていれば true を返す関数を作ってください。

```
# 文字列
TypeScript はマイクロソフトによって開発され、メンテナンスされているフリーでオープンソースのプログラミング言語である。TypeScriptはJavaScriptに対して、省略も可能な静的型付けとクラスベースオブジェクト指向を加えた厳密なスーパーセットとなっている。C# のリードアーキテクトであり、DelphiとTurbo Pascalの開発者でもあるアンダース・ヘルスバーグが TypeScript の開発に関わっている。TypeScriptはクライアントサイド、あるいはサーバサイド (Node.js) で実行されるJavaScriptアプリケーションの開発に利用できる。
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

### 課題 4
課題 3 の関数を改良して検索ワードにヒットした回数を返す関数を作ってください。


```typescript
/**
 *  テキストから任意のワードを検索する
 *  @param {string} text 検索対象のテキスト
 *  @param {string} searchWord 検索するワード
 *  @return {number} 出力結果 検索ヒットした回数
 */
function searchText(text: string, searchWord: string): number
```

### 課題 5
数字を並べ替えする関数を作ってください。ソートアルゴリズムは挿入ソート。<br>
[挿入ソートの例](https://programming-place.net/ppp/contents/algorithm/sort/004.html)<br>


```typescript
/**
 *  配列のソート（挿入ソート）
 *  @param {number[]} nums ソート対象の値配列
 *  @param {boolean} isDesc 降順でのソートフラグ true:降順 false:昇順
 *  @return {number[]} 出力結果
 */
function sort(nums: number[], desc: boolean): number
```

### 課題 6
### 課題 7
### 課題 8
### 課題 9
### 課題 10