import * as path from 'path'
import { deleteDirectory } from '../utils/removeFolder'

type PayloadType = {
  name: string
  destination: string
}

export const removePage = async (payload: PayloadType) => {
  const name = payload.name.charAt(0).toUpperCase() + payload.name.slice(1)
  await deleteDirectory(path.join(payload.destination, name))

  console.log('\x1b[36m', `Page ${name} removed`, '\x1b[0m')
}
