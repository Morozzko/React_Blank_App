import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../assets/animations/wavepattern.json'
import { useAppSize } from '../../context/AppSizeContext'

export const BG: FC = React.memo(() => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  const { innerWidth, innerHeight } = useAppSize()

  return (
    <div className="pointer-events-none fixed flex h-full w-full items-center justify-center">
      <Lottie
        height={innerHeight}
        width={innerWidth}
        options={defaultOptions}
      />
    </div>
  )
})
