// const compose = require('koa-compose')

function compose (middleware) {
  return function (ctx, next) {
    const dispatch = function (index) {
      let fn = middleware[index]
      if (index === middleware.length) fn = next
      if (!fn) return Promise.resolve()
      return fn(ctx, dispatch.bind(null, ++index))
    }
    dispatch(0)
  }
}

async function m1 (ctx, next) {
  console.log(ctx)
  console.log('middleware1 start')
  await next()
  console.log('middleware1 end')
}

async function m2 (ctx, next) {
  console.log(ctx)
  console.log('middleware2 start')
  await next()
  console.log('middleware2 end')
}

async function m3 (ctx, next) {
  console.log(ctx)
  console.log('middleware3 start')
  await next()
  console.log('middleware3 end')
}

compose([m1, m2, m3])('context')
