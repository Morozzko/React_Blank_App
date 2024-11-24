export const base64ToArrayBuffer = (base64: string | Blob) => {
  if (typeof base64 === 'string') {
    const binary = window.atob(base64)
    const buffer = new ArrayBuffer(binary.length)
    const bytes = new Uint8Array(buffer)
    for (let i = 0; i < buffer.byteLength; i++) {
      bytes[i] = binary.charCodeAt(i)
    }

    return buffer
  }
}
