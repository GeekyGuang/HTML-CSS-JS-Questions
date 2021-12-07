const p1 = Promise.resolve(1)
p1.then((result) => console.log(result)).catch((err) => console.error(err))

const p2 = Promise.reject(new Error('err'))
p2.then(null, () => console.log('then err')).catch((err) => console.error(err))
