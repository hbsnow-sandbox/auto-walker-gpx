import { lerp } from '@/common/lerp'

describe('lerp', () => {
  test('2点間の距離を求める', () => {
    expect(lerp([0, 0], [1, 2])).toBe(2.236068)
    expect(lerp([0, 0], [3, 4])).toBe(5)
  })
})
