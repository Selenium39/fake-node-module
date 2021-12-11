// const mixin = require('merge-descriptors')

function mixin (obj2, obj1) {
  const propKeys = Reflect.ownKeys(obj1)
  for (const key of propKeys) {
    obj2[key] = obj1[key]
  }
}

const obj1 = {
  get name () {
    return 'aaa'
  }
}

const obj2 = {

}

mixin(obj2, obj1)
console.log(obj2.name)
