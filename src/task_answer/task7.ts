/**
 *  テキストから任意のワードを検索する
 *  @param {string} text 検索対象のテキスト
 *  @param {string} searchWord 検索するワード
 *  @return {number} 出力結果 検索ヒットした回数
 */
function searchText(text: string, searchWord: string): number {
  return (text.match(new RegExp(searchWord, 'g')) || []).length
}

/**
 * 実行
 */
const task7Text: string = 'TypeScript はマイクロソフトによって開発され、メンテナンスされているフリーでオープンソースのプログラミング言語である。TypeScriptはJavaScriptに対して、省略も可能な静的型付けとクラスベースオブジェクト指向を加えた厳密なスーパーセットとなっている。C# のリードアーキテクトであり、DelphiとTurbo Pascalの開発者でもあるアンダース・ヘルスバーグが TypeScript の開発に関わっている。TypeScriptはクライアントサイド、あるいはサーバサイド (Node.js) で実行されるJavaScriptアプリケーションの開発に利用できる。'
console.log(searchText(task7Text, 'TypeScript'))    // 4
console.log(searchText(task7Text, 'プログラミング'))  // 1
console.log(searchText(task7Text, 'shohei'))        // 0
