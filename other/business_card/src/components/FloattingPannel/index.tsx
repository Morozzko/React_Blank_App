import clsx from 'clsx'
import React from 'react'

type OwnPropertyType = {
  side: 'top' | 'bottom' | 'left' | 'right'
  visible: boolean
  children: React.ReactNode
}

export const FloatingPanel: React.FC<OwnPropertyType> = ({
  side,
  visible,
  children,
}) => {
  const panelClass = clsx(
    'fixed bg-gray-100 p-4 shadow-lg transition-all duration-300 ease-in-out',
    side === 'top' && 'left-0 top-0 w-full',
    side === 'top' && !visible && '-translate-y-full',
    side === 'bottom' && 'bottom-0 left-0 w-full',
    side === 'bottom' && !visible && 'translate-y-full',
    side === 'left' && 'left-0 top-0 h-full',
    side === 'left' && !visible && '-translate-x-full',
    side === 'right' && 'right-0 top-0 h-full',
    side === 'right' && !visible && 'translate-x-full'
  )

  return <div className={panelClass}>{children}</div>
}
