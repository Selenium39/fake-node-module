// const only = require('only')
function only(obj,params){
    const newObj = Object.create({})
    params.forEach(param=>{
        if(obj[param]){
            newObj[param] = obj[param]
        }
    })
    return newObj
}

const obj = {id:1,name:'foo',age:20}

const obj1 = only(obj,['name','age','sex'])
console.log(obj1)