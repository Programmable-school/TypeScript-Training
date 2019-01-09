# TypeScript入門

> 初学者向け TypeScript構文理解のためのソースコード

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
