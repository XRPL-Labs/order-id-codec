const {to, from, check} = require('./index')

const n = 123456
const t = to(n)
const f = from(t)
const c = check(String(n) + '.' + t)

console.log({n, t, f, c})

console.log(check(String(123111) + '.' + 'YOLO'))
