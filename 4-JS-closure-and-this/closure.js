function createCache() {
  const data = {} // 隐藏数据
  return {
    set(key, value) {
      data[key] = value
    },
    get(key) {
      return data[key]
    },
  }
}

const c = createCache()
c.set('a', 2)
console.log(c.get('a'))
