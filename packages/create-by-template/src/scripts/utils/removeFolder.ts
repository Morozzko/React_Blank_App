import fs from 'fs/promises'
import path from 'path'

export const deleteDirectory = async (directory: string) => {
  try {
    const files = await fs.readdir(directory, { withFileTypes: true })

    for (const file of files) {
      const filePath = path.join(directory, file.name)

      if (file.isDirectory()) {
        await deleteDirectory(filePath)
      } else {
        await fs.unlink(filePath)
      }
    }

    await fs.rmdir(directory)
  } catch (err) {
    console.error(`Error while delete folder: ${err}`)
  }
}
