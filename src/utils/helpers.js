export const padNum = (num, digits=2) => 
  num.toString().padStart(digits, '0')

export const secondsToStr = (seconds) => {
  const mins = Math.round(Math.floor(seconds / 60))
  const secs = Math.round(seconds % 60)

  let str = `${padNum(mins, 1)}:${padNum(secs, 2)}`
  return str
}

export const range = (from, to) =>
  Array.from(new Array(to - from + 1), (val, index) => index + from);
