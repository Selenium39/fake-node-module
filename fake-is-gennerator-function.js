const assert = require('assert')
// const isGenneratorFunction = require('is-generator-function')

function isGenneratorFunction (arg) {
  if (!(arg && typeof arg === 'function')) return false
  const reg = /function\s*\*\s*/
  return !!reg.exec(arg)
}

assert(!isGenneratorFunction(function () { }))
assert(!isGenneratorFunction(null))
assert(isGenneratorFunction(function * () { yield 'hello' }))
