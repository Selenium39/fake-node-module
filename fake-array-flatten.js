// const { flatten } = require('array-flatten')
const flatten = function (arr) {
  const arrayFlattenHelper = function (arr, result) {
    if (typeof arr === 'object') {
      for (const item of arr) {
        arrayFlattenHelper(item, result)
      }
    } else {
      result.push(arr)
    }
  }
  const result = []
  arrayFlattenHelper(arr, result)
  return result
}

const arr = [1, 2, [3, 4, 5, 6], [[7, 8, 9], [1, 2, 3]]]

console.log(flatten(arr))
