function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')

    img.onload = () => {
      resolve(img)
    }

    img.onerror = () => {
      const err = new Error('图片加载失败')
      reject(err)
    }

    img.src = src
  })
}

const url1 =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_bQ9zXebjzOUXVrB_iPRH4i76TLXmMAyYXPf8aTrcrysT84gS6v40mutaFvtKDhGdh8&usqp=CAU'
const url2 =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Bk5NDQmjS6KX_KQMWNJCMxSnySqxG0gB1llrfp1Kqxt3rTKBkhmGFrHoEFMjeTOOoO8&usqp=CAU'

loadImg(url1)
  .then((img1) => {
    console.log(img1.width)
    document.body.append(img1)
    return loadImg(url2)
  })
  .then((img2) => {
    console.log(img2.width)
    document.body.append(img2)
  })
  .catch((error) => console.error(error))
