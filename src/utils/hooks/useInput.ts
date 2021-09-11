import { ChangeEvent, useCallback, useState } from 'react'

type UseInputType = {
  text: string
  onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const useInput = (): UseInputType => {
  const [text, setText] = useState<string>('')

  const onChangeHandler = useCallback((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setText(event.target.value)
  }, [])

  return { text, onChangeHandler }
}
export default useInput
