function muti(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

const nums = [1, 2, 3]

nums.forEach(async (i) => {
  const res = await muti(i)
  console.log(res)
})

!(async function () {
  for (let i in nums) {
    const res = await muti(nums[i])
    console.log(res)
  }
})()
