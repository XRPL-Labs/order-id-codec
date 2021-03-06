const { to, from, check } = require('../../index')

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
  
  const res = new Response(JSON.stringify(check(params?.in)))

  // res.headers.set('X-Hello', 'Hello from XRPL Labs')
  res.headers.set('Content-Type', 'application/json;charset=UTF-8')
  res.headers.set('Access-Control-Allow-Origin', '*')

  return res
}
