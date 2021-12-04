Function.prototype.myBind = function () {
  // 将参数变为数组
  const args = Array.prototype.slice.call(arguments)
  // 获取this
  const t = args.shift()
  // 获取函数自身 fn1.bind()中的fn1
  const self = this

  return function () {
    return self.apply(t, args)
  }
}

function fn1(a1, a2) {
  console.log('this', this)
  console.log(a1, a2)
  return 'this is fn1'
}

const fn2 = fn1.bind({ x: 100 }, 10, 20, 30)
const res = fn2()
console.log(res)
