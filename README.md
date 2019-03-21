# TypeScript入門

> 初心者向け TypeScript入門トレーニング。

| | |
|---|---|
|オススメの対象者|このトレーニングは、WEB系のエンジニアを目指す方にオススメです。WEBではHTML, CSS, JavaScriptが基礎として必要ですが、近年状況が変化し**Vue**や**React**などのフレームワークを使うことが一般的になってきました。また、フレームワークの言語もJavaScriptからTypeScriptへの移行しつつあります。 このトレーニングを行うことで先端の開発で利用されいる知識を得ることが可能です。| 
|トレーニングに必要な知識|このトレーニングを進めていくには、Gitとコマンドラインの知識が必要になります。|

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
- [課題](./src/README.md)

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

また、serveを使えば1回でビルドと実行をしてくれます。
```bash
# ビルド後に実行
$ npm run serve
Hello! world.
```

それでは実際にコードを書いてTypeScriptを学習していきましょう。<br>
[次のLessonへ](./src/README.md)<br>