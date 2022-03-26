import { ChangeEvent, useCallback, useState } from 'react'

type UseInputType = [text: string, onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void, clear: () => void]

const useInput = (initialValue?: string): UseInputType => {
  const [text, setText] = useState<string>(initialValue || '')
  const onChangeHandler = useCallback((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setText(event.target.value)
  }, [])
  const clear = () => setText('')
  return [text, onChangeHandler, clear]
}
export default useInput
