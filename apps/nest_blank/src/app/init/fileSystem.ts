import * as fs from 'fs'

export const initFileSystem = () => {
  const fileContent = ''
  const filepath = `${process.env.UPLOAD_LOCATION}/index.html`
  const filePath = process.env.UPLOAD_LOCATION
  try {
    fs.mkdirSync(filePath, { recursive: true })
    fs.writeFile(filepath, fileContent, err => {
      if (err) {
        console.log('Пожалуйста выдайте права на запись для приложения')
      }
    })
  } catch (e) {
    console.log(e)
    console.log('Не удалось инициализировать файловую систему, проверьте доступность ресурса или попробуйте выдать права на запись для приложения')
  }
}
