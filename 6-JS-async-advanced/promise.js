// const p1 = Promise.resolve(1)
// p1.then((result) => console.log(result)).catch((err) => console.error(err))

// const p2 = Promise.reject(new Error('err'))
// p2.then(null, () => console.log('then err')).catch((err) => console.error(err))

/* then 和 catch状态变化 */
const p1 = Promise.resolve().then(() => {
  return 100
})
console.log('p1', p1) // fulfilled

const p2 = Promise.resolve().then(() => {
  throw new Error('err')
})
console.log('p2', p2) // rejected

const p3 = Promise.reject('err').catch((err) => {
  return err
})

console.log('p3', p3) // fulfilled

const p4 = Promise.reject('err').catch(() => {
  throw new Error('catch err')
})

console.log('p4', p4) // rejected

// 习题
Promise.resolve()
  .then(() => {
    console.log(1)
    throw new Error('error1')
  })
  .catch(() => {
    console.log(2)
  })
  .catch(() => {
    console.log(3)
  })
