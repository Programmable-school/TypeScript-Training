/**
 *  テキストから任意のワードを検索する
 *  @param {string} text 検索対象のテキスト
 *  @param {string} searchWord 検索するワード
 *  @return {boolean} 出力結果 true:存在する false:存在しない
 */
function isSearchText(text: string, searchWord: string) {
  return text.indexOf(searchWord) !== -1 ? true: false
}

/**
 * 実行
 */
const sentence1: string = 'TypeScript はマイクロソフトによって開発され、メンテナンスされているフリーでオープンソースのプログラミング言語である。TypeScriptはJavaScriptに対して、省略も可能な静的型付けとクラスベースオブジェクト指向を加えた厳密なスーパーセットとなっている。C# のリードアーキテクトであり、DelphiとTurbo Pascalの開発者でもあるアンダース・ヘルスバーグが TypeScript の開発に関わっている。TypeScriptはクライアントサイド、あるいはサーバサイド (Node.js) で実行されるJavaScriptアプリケーションの開発に利用できる。'
console.log(isSearchText(sentence1, 'TypeScript'))   // true
console.log(isSearchText(sentence1, 'メンテナンス'))   // true
console.log(isSearchText(sentence1, 'shohei'))       // false
