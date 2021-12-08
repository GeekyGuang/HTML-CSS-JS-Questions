/* async返回的是Promise */
async function fn1() {
  return 100
}

const res1 = fn1()

res1.then((data) => {
  console.log('data', data)
})

/* await相当于Promise then */
!(async function () {
  const p1 = Promise.resolve(300)
  const data = await p1
  console.log('data', data)
})()

!(async function () {
  const data = await 300
  console.log('data', data)
})()

// /* try...catch捕获错误 */
!(async function () {
  const p = Promise.reject('err')
  try {
    // 不会执行
    const res = await p
    console.log(res)
  } catch (ex) {
    console.error(ex)
  }
})()

/* 异步本质 */
async function async1() {
  console.log('async1 start')
  await async2()
  // 后面的代码全都放到callback queue里了，等待同步代码执行完再执行
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
}

console.log('script start')
async1()
console.log('script end')
