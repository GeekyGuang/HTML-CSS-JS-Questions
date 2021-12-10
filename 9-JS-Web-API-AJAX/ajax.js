function ajax(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', url, true)

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.responseText)
      } else if (xhr.status === 404) {
        reject(new Error('not found'))
      }
    }

    xhr.send()
  })
}

ajax('data.json')
  .then((res) => console.log(res))
  .catch((err) => console.error(err))

// const xhr = new XMLHttpRequest()

// xhr.open('POST', '/login', true)

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     console.log(xhr.responseText)
//   }
// }

// const json = JSON.stringify({
//   name: 'John',
// })

// xhr.setRequestHeader('Content-type', 'applicatin/json; charset=utf-8')

// xhr.send(json)
