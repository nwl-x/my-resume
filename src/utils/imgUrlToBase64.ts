const imgUrlToBase64 = (url: string): Promise<FileReader['result']> =>
  new Promise((resolve) => {
    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
      const reader = new FileReader()

      reader.onloadend = () => resolve(reader.result)
      reader.readAsDataURL(xhr.response)
    }

    xhr.open('GET', `images/${url}`)
    xhr.responseType = 'blob'
    xhr.send()
  })

export default imgUrlToBase64
