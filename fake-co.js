// const co = require('co')

function request (n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(n + 10) }, 1000)
  })
}

co(function * () {
  const n1 = yield request(0)
  const n2 = yield request(n1)
  const n3 = yield request(n2)
  return n3
}).then((result) => {
  console.log(result)
}).catch((err) => {
  console.log(err)
})

function co (fn) {
  return new Promise((resolve, reject) => {
    const gen = fn()
    function next (res) {
      const ret = gen.next(res)
      if (ret.done) return resolve(ret.value)
      ret.value.then(next) // 递归调用gen.next()
    }
    next()
  })
}
