/* 緯度と経度から距離を求めて近い順にまとめる */

function lessonPosSort() {
  // 現在位置
  const nowPosition: any = {la: 24, lo: 102}

  // 取得したスポット一覧
  const responce: any[] = [
    {id: 0, la: 20, lo: 100},
    {id: 1, la: 24, lo: 120},
    {id: 2, la: 23, lo: 103},
    {id: 3, la: 22, lo: 129},
  ]

  // 現在位置から取得したスポットの距離を計算して、一番近い順にソートする。
  const resultList = responce.map(item => {
    item["distance"] = getDistance(nowPosition.la, nowPosition.lo, item.la, item.lo)
    return item
  }).sort((prevItem, currentItem) => {
    if (prevItem.distance < currentItem.distance) {
      return -1
    } else {
      return 1
    }
  })

  // ソートした一覧と一番近いスポットを表示
  console.log("距離の近い順にソートしたリスト", resultList)
  console.log("距離が一番近いスポット", resultList[0])
}

// 距離の計算
function getDistance(lat1, lng1, lat2, lng2) {
  return 6378.14 * Math.acos(Math.cos(radians(lat1))* 
    Math.cos(radians(lat2))*
    Math.cos(radians(lng2)-radians(lng1))+
    Math.sin(radians(lat1))*
    Math.sin(radians(lat2)));
}

// 角度
function radians(deg){
  return deg * Math.PI / 180;
}
