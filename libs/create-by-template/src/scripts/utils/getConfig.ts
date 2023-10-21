import fs from 'fs'
import path from 'path'
import { ConfigType } from './lib/types'

// Путь к корневой директории проекта
const rootDir = process.cwd()

// Путь к файлу конфигурации
const configFile = path.join(rootDir, '.config.template.js')

export const getConfig = (): ConfigType | undefined => {
  // Проверяем наличие файла конфигурации
  if (fs.existsSync(configFile)) {
    return require(configFile)
  } else {
    console.error('Конфигурационный файл .config.template.js не найден!')
  }
}
