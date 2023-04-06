export default function (url) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    // 设置安全策略
    img.crossOrigin = 'anonymous'
    img.onload = function () {
      try {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        ctx.drawImage(img, 0, 0)
        // toDataURL 使用默认的
        resolve(canvas.toDataURL())
      } catch (e) {
        reject(e)
      }
    }
    img.src = url
  })
}
