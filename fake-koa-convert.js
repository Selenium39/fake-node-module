// const convert = require('koa-convert')
const co = require('co')

function convert (mw) {
  if (mw.constructor.name !== 'GeneratorFunction') return mw
  const converted = function (ctx, next) {
    return co.call(ctx, mw.call(ctx, (function * (next) { yield next() })(next)))
  }

  return converted
}

function * legacyMiddleware (next) {
  yield next()
}

const modernMiddleware = convert(legacyMiddleware)

console.log(legacyMiddleware.constructor.name === 'GeneratorFunction')
console.log(modernMiddleware.constructor.name === 'Function')
console.log(modernMiddleware.toString())
