//@ts-check
/**
 * 緯度経度用の座標の数値の桁数に変換する
 * @param {number} location
 */
export const parseLocation = (location) => parseFloat(location.toFixed(7))

/**
 * 二点間の距離を求める
 * @param {number} a
 * @param {number} b
 */
export const lerp = (a, b) =>
  parseLocation(Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2))
