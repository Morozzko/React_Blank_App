import clsx from 'clsx'
import { useState } from 'react'
import { Button, Input } from './components'
import { Atom } from './ds/Atom'

export function App() {
  const [dark, setDark] = useState<boolean>(false)

  return (
    <div
      className={clsx(
        'flex w-full flex-col bg-paper-light-400',
        dark ? 'dark' : ''
      )}>
      <Atom>
        {(size, variant) => (
          <Button size={size} variant={variant} onClick={() => setDark(!dark)}>
            Button
          </Button>
        )}
      </Atom>

      <Atom>
        {(size, variant) => (
          <Input
            placeholder="Placeholder"
            label="label"
            size={size}
            variant={variant}
          />
        )}
      </Atom>
    </div>
  )
}
