import fs from 'fs'
import path from 'path'
import type { MFType } from './lib/types'
import { ConfigType } from './lib/types'

const indexHTMLPath = '.env.'

const changeENVFile = (
  name: string,
  filePath: string,
  dictionary: Record<string, MFType>,
  imports?: string[],
  isProduction?: boolean,
  config?: ConfigType['config']
) => {
  const configPath = isProduction ? 'prod' : 'dev'

  // Читаем файл
  const data = fs.readFileSync(filePath, 'utf8')

  const text = data
    .split('\n')
    .filter(line => !line.includes('REACT_APP_MF_'))
    .filter(line => !line.includes('HOST'))
    .filter(line => !line.includes('REACT_APP_PUBLIC_PATH'))
    .filter(line => !line.includes('REACT_APP_ROOT_PUBLIC_PATH'))
    .filter(line => !line.includes('PORT'))
    .filter(line => Boolean(line?.trim()))

  if (isProduction) {
    text.push(`HOST=${dictionary[name].host[configPath]}`)
  }
  if (!isProduction) {
    text.push(
      `HOST=${dictionary[name].host[configPath]
        .replace('https://', '')
        .replace('http://', '')}`
    )
  }
  text.push(`PORT=${dictionary[name].port[configPath]}`)
  text.push(`REACT_APP_PUBLIC_PATH=${dictionary[name].publicPath[configPath]}`)

  text.push(`REACT_APP_ROOT_PUBLIC_PATH=${config?.rootPublicPath[configPath]}`)

  if (imports?.length) {
    imports.forEach(env => {
      text.push(
        `REACT_APP_MF_${env.toUpperCase()}=${
          dictionary[env].host[configPath]
        }:${dictionary[env].port[configPath]}${
          dictionary[env].publicPath[configPath]
        }remoteEntry.js`
      )
      text.push(
        `REACT_APP_MF_${env.toUpperCase()}_PUBLIC_PATH=${
          dictionary[env].publicPath[configPath]
        }`
      )
    })
  }
  const newData = text.join('\n')
  // Записываем обновленный HTML обратно в файл
  fs.writeFileSync(filePath, newData, 'utf8')
}

export const changeENV = (
  name: string,
  fp: string,
  dictionary: Record<string, MFType>,
  imports?: string[],
  config?: ConfigType['config']
) => {
  const dev = path.join(fp, `${indexHTMLPath}development`)
  const prod = path.join(fp, `${indexHTMLPath}production`)

  changeENVFile(name, dev, dictionary, imports, false, config)
  changeENVFile(name, prod, dictionary, imports, true, config)
}
