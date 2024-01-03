import { base64ToArrayBuffer } from './base64ToArrayBuffer.ts'
import { createTempImageLinkFromBlob } from './createTempImageLinkFromBlob.ts'

export const binaryToLink = (binaryData: any) => {
  const link = createTempImageLinkFromBlob(
    // @ts-ignore
    new Blob([base64ToArrayBuffer(binaryData)], {
      type: 'application/pdf',
    })
  )

  return link
}
