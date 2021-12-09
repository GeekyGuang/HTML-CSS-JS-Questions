async function fn() {
  return 100
}

;(async function () {
  const a = fn()
  console.log(a)
  const b = await fn()
  console.log(b)
})()
