/**
 * 深拷贝
 */

const obj1 = {
  age: 20,
  name: 'xxx',
  address: {
    city: 'beijing',
  },
  arr: ['a', 'b', 'c'],
}

function deepClone(obj = {}) {
  // obj是null或者不是对象或数组，则返回obj自己
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }

  // 初始化返回结果
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (let key in obj) {
    // 保证key不是原型属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key])
    }
  }

  // 返回结果
  return result
}
