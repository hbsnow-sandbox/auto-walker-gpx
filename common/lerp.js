export const lerp = (a, b) =>
  parseFloat(Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2).toFixed(7))
