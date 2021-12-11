// const first = require('ee-first')
const EventEmitter = require('events').EventEmitter
function first (eventArr, callback) {
  for (let i = 0; i < eventArr.length; i++) {
    const ee = eventArr[i].shift()
    const enArr = eventArr[i]
    for (let j = 0; j < enArr.length; j++) {
      ee.on(enArr[j], (msg) => {
        callback(null, ee, enArr[j], msg)
      })
    }
  }
}
const ee1 = new EventEmitter()
const ee2 = new EventEmitter()
first([
  [ee1, 'close', 'end', 'error'],
  [ee2, 'error']
], function (err, ee, event, args) {
  if (err) return
  // listener invoked
  console.log(ee)
  console.log(event)
  console.log(args)
})
ee1.emit('error', '111')
