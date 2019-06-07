//@ts-check
/**
 * 緯度経度用の座標の数値の桁数に変換する
 * @param {number} location
 */
export const parseLocation = (location) => parseFloat(location.toFixed(7))

/**
 * 二点間の距離を求める
 * @param {number[]} a 始点
 * @param {number[]} b 終点
 */
export const lerp = (a, b) =>
  parseLocation(Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2))

/**
 * 始点から終点まで指定距離を移動したときの座標と、終点までの残り距離を求める
 * @param {number[]} a 始点
 * @param {number[]} b 終点
 * @param {number} distance 移動距離
 */
export const move = (a, b, distance) => {
  const length = lerp(a, b)
  if (distance >= length) {
    return b
  }

  return [
    parseLocation((a[0] * (length - distance) + b[0] * distance) / length),
    parseLocation((a[1] * (length - distance) + b[1] * distance) / length)
  ]
}
