import * as path from 'path'
import { deleteDirectory } from '../utils/removeFolder'

type Payload = {
  destination: string
  name: string
}

export const removeWidget = async (payload: Payload) => {
  await deleteDirectory(path.join(payload.destination, payload.name))
  console.log(`Widget ${payload.name} removed`)
}
