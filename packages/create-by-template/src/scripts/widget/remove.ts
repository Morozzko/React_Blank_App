import * as path from 'path'
import { deleteDirectory } from '../utils/removeFolder'

type Payload = {
  destination: string
  name: string
}

export const removeWidget = async (payload: Payload) => {
  await deleteDirectory(path.join(payload.destination, payload.name))
  console.log('\x1b[36m', `Widget ${payload.name} removed`, '\x1b[0m')
}
