export default function (selector) {
  return new Promise((resolve, reject) => {
    const input = document.querySelector(selector)
    if (!input) {
      reject(new Error('input selector not exist'))
    } else {
      input.addEventListener('change', function (e) {
        const selectedFiles = Array.from(e.target.files)
        const firstFile = selectedFiles[0]
        if (firstFile) {
          const fr = new FileReader()
          fr.onload = function (e) {
            resolve(fr.result)
          }
          fr.readAsDataURL(firstFile)
        } else {
          reject(new Error('please select a image'))
        }
      })
    }
  })
}
