const { to, from, check } = require('../index')

export async function onRequest(context) {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context

  const number = Number(params?.id || 0)

  const res = new Response(JSON.stringify({
    number,
    string: to(number)
  }))

  res.headers.set('X-Hello', 'Hello from XRPL Labs')

  return res
}