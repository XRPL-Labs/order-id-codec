const assert = require('assert')
const chars = 'abcdehlkmrtwxyz'.toUpperCase()

const to = decimal => {
  assert(String(decimal || '').match(/^[0-9]+$/))

  let out = ''
  while (true) {
    let remainder = (decimal - 1) % chars.length
    out = chars[remainder] + out;
    decimal = Math.floor((decimal - 1) / chars.length);
    if (decimal === 0) break
  }
  return out;
}

const from = alpha => {
  assert(typeof alpha === 'string')

  const crs = chars.split('')
  const letters = alpha.split('')
  let out = 0
  for (let i = 0; i < letters.length; i++) {
    let indexPos = crs.indexOf(letters[letters.length - 1 - i])
    out += (indexPos + 1) * Math.pow(crs.length, i) 
  }
  return out
}

const check = input => {
  const dec = Number(input.split('.')?.[0] || 0) || 0
  const str = (input.split('.')?.[1] || '').toUpperCase()
  const strDecodesToDec = from((input.split('.')?.[1] || '').toUpperCase())

  return {
    dec,
    str,
    strDecodesToDec,
    valid: dec === strDecodesToDec
  }
}

module.exports = { to, from, check }
