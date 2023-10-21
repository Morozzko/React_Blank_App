import * as path from 'path'
import { deleteDirectory } from '../utils/removeFolder'

type PayloadType = {
  destination: string
  name: string
}

export const removeService = async (payload: PayloadType) => {
  await deleteDirectory(path.join(payload.destination, payload.name))
  console.log('\x1b[36m', `Service ${payload.name} removed`, '\x1b[0m')
}
