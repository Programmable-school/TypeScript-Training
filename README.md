# TypeScript入門

> 初心者向け TypeScript入門トレーニング。

| | |
|---|---|
|オススメの対象者|このトレーニングは、WEB系のエンジニアを目指す方にオススメです。WEBではHTML, CSS, JavaScriptが基礎として必要ですが、近年状況が変化し**Vue**や**React**などのフレームワークを使うことが一般的になってきました。また、フレームワークの言語もJavaScriptからTypeScriptへの移行しつつあります。 このトレーニングを行うことで先端の開発で利用されいる知識を得ることが可能です。| 
|トレーニングに必要な知識|このトレーニングを進めていくには、Gitとコマンドラインの知識が必要になります。|

## 目次
- [環境構築](https://github.com/Programmable-school/TypeScript-Training#%E6%89%8B%E9%A0%86)
- [Hello Worldを表示](./src/lesson/LessonHelloWorld.ts)
- [変数と定数](./src/lesson/LessonLetConst.ts)
- [関数](./src/lesson/LessonFunction.ts)
- [プリミティブ型、Any型](./src/lesson/LessonPriAny.ts)
- [Optional型](./src/lesson/LessonOptional.ts)
- [演算子](./src/lesson/LessonCalc.ts)
- [配列](./src/lesson/LessonArray.ts)
- [連想配列](./src/lesson/LessonAssociativeArray.ts)
- [リスト操作](./src/lesson/LessonListOperation.ts)
- [if文（条件分岐）](./src/lesson/LessonIf.ts)
- [比較演算子](./src/lesson/LessonCompare.ts)
- [AND・OR, 三項演算子](./src/lesson/LessonAndOr.ts)
- [switch文（条件分岐）](./src/lesson/LessonSwitch.ts)
- [while文（繰り返し）](./src/lesson/LessonWhile.ts)
- [for文（繰り返し）](./src/lesson/LessonFor.ts)
- [Enum](./src/lesson/LessonEnum.ts)
- [クラス ](./src/lesson/LessonClass.ts)
- [キャスト変換（型変換）](./src/lesson/LessonCast.ts)
- [数学計算（Math）](./src/lesson/LessonMath.ts)
- [日付関数（Date）](./src/lesson/LessonDate.ts)
- [static](./src/lesson/LessonStatic.ts)
- [継承](./src/lesson/LessonInheritance.ts)
- [インターフェース](./src/lesson/LessonInterface.ts)
- [ジェネリクス](./src/lesson/LessonGenerics.ts)
- [非同期処理](./src/lesson/LessonAsyncProcess.ts)
- [ReactiveX](./src/lesson/LessonReactiveX.ts)
- [課題](#課題)
## 環境構築

このレッスンを進めるための手順を説明します。

**node.jsをインストール**

TypeScriptの学習はnode環境を使って行います。まずは[https://nodejs.org/en/](https://nodejs.org/en/)からnodeをダウンロードしインストールしてください。

**トレーニングをclone**

次に、このページをcloneしてください。

```bash
# TypeScript-Trainingをダウンロード
$ git clone https://github.com/Programmable-school/TypeScript-Training.git
$ cd TypeScript-Training/

# packageをダウンロード
$ npm install
```

トレーニングでは以下のディレクトリ構成に注目してください。
```bash
├── package-lock.json
├── package.json
├── src
│   ├── app.ts
│   ├── training
│   │   └── HelloWorld.ts
└── tsconfig.json
```

**package.json**

ファイルの依存関係を示すファイルです。`npm install`ではこのファイルの`dependencies`や`devDependencies`に記載された内容を`/node_modules`にインストールします。

**package-lock.json**

ファイルの依存関係を固定するためのファイルです。実開発では利用しているライブラリのバージョンが上がってしまうことで、互換性がなくなり開発中のソースコードも動かなくなることがあります。それを防止するためnodeではバージョンを記録するためpackage-lock.jsonが作られます。

**/src**

今回ソースコードを記述していくディレクトリです。`app.ts`と`/training`の中に新しいコードやファイルを追加していき学習していきましょう。

**tsconfig.json**

TypeScriptの設定ファイルです。このファイルを変更することでTypeScriptの振舞いを変更することができます。
このトレーニングではこのファイルについては触れません。


## トレーニングを始める

### Hello worldを表示する
src配下にapp.tsを作成し、エディタで以下のコードを実装して保存します。
```typescript
console.log("Hello world")
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
Hello world
```
無事、表示されました。

また、serveを使えば1回でビルドと実行をしてくれます。
```bash
# ビルド後に実行
$ npm run serve
Hello world
```

それでは実際にコードを書いてTypeScriptを学習していきましょう。<br>
[次のLessonへ](./src/README.md)<br>