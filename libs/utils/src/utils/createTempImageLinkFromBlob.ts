export const createTempImageLinkFromBlob = (blob?: Blob) => {
  if (blob && blob instanceof Blob) {
    return window.URL.createObjectURL(blob)
  }

  return ''
}
