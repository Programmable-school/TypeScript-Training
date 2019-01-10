# TypeScript入門

> 初心者向け TypeScript入門トレーニング

- [Hello! World.を表示](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [変数と定数](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [プリミティブ型、Any型](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [Optional型](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [演算子](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [配列](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [連想配列](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [リスト操作](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [if分（条件判断](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [比較演算子](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [AND・OR, 三項演算子](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [switch文（条件判断）](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [while文（繰り返し）](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [for文（繰り返し）](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [関数](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [Enum](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [クラス ](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Class.ts)
- [キャスト変換（型変換）](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [数学計算（Math）](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [日付関数（Date）](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson.ts)
- [static](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Static.ts)
- [継承](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Inheritance.ts)
- [インターフェース](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Interface.ts)
- [ジェネリクス](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_Generics.ts)
- [非同期処理](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_AsyncProcess.ts)
- [ReactiveX](https://github.com/Programmable-school/TypeScript-Training/blob/master/src/lesson/Lesson_ReactiveX.ts)

## 手順
nodeとnpmをインストールしてから以下の手順に従って環境構築してください。

### 環境構築
以下のようなディレクトリ構成になるよう環境を構築します。
```bash
├── build
│   ├── app.js
│   └── app.js.map
├── package-lock.json
├── package.json
├── src
│   └── app.ts
└── tsconfig.json
```

以下の手順を実行します。
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

以上です。<br>

コンテンツ準備中のため、<br>
直接ソースコードを見て写経して学習してください。<br>
[Lesson](https://github.com/Programmable-school/TypeScript-Training/tree/master/src/lesson)<br>


## Lessonコードを確認する
本リポジトリをローカルPCへ取り込み、全Lessonのソースコード及び挙動を確認できます。
```bash
├── LICENSE
├── README.md
├── package.json
├── src
│   ├── app.ts
│   ├── app_async.ts
│   ├── app_rxjs.ts
│   ├── lesson
│   │   ├── Lesson.ts
│   │   ├── Lesson_AsyncProcess.ts
│   │   ├── Lesson_Class.ts
│   │   ├── Lesson_Generics.ts
│   │   ├── Lesson_Inheritance.ts
│   │   ├── Lesson_Interface.ts
│   │   ├── Lesson_ReactiveX.ts
│   │   └── Lesson_Static.ts
│   └── utils
│       └── utils.ts
├── tsconfig.json
```

### 手順
```bash
# TypeScript-Trainingをダウンロード
$ git clone https://github.com/Programmable-school/TypeScript-Training.git
$ cd TypeScript-Training/

# packageをダウンロード
$ npm install

# Lessonコードをビルド＆実行
$ npm run serve

# 非同期処理のLessonを実行
$ npm run serve-async

# ReactiveXのLessonを実行
$ npm run serve-rxjs
```
