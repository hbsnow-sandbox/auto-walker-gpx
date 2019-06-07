import { parseLocation, lerp } from '@/common/map'

describe('parseLocation', () => {
  test('7桁の小数に変換する', () => {
    expect(parseLocation(1.41421356237)).toBe(1.4142136)
    expect(parseLocation(2.2360679775)).toBe(2.236068)
    expect(parseLocation(2.2360679775)).not.toBe(2.2360679)
    expect(parseLocation(5)).toBe(5)
  })
})

describe('lerp', () => {
  test('2点間の距離を求める', () => {
    expect(lerp([0, 0], [1, 2])).toBe(2.236068)
    expect(lerp([0, 0], [1, 2])).not.toBe(2.236067)
    expect(lerp([0, 0], [3, 4])).toBe(5)
  })
})
