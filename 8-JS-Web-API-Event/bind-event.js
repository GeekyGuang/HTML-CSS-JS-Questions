function bindEvent(elem, type, fn, selector) {
  elem.addEventListener(type, (e) => {
    const target = e.target
    if (selector) {
      if (target.matches(selector)) {
        fn.call(target, e)
      }
    } else {
      fn.call(target, e)
    }
  })
}

const btn = document.querySelector('.btn')

bindEvent(btn, 'click', function (e) {
  e.preventDefault()
  console.log(this.innerHTML)
})

const papa = document.querySelector('.papa')
bindEvent(
  papa,
  'click',
  function (e) {
    e.preventDefault()
    console.log(this.innerHTML)
  },
  '.btn'
)
