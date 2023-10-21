import React, { ReactNode } from 'react'
import Lottie from 'react-lottie'
import { useAppSize } from '../../context/AppSizeContext'
import { Paper } from '../Paper'

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

type OwnPropertyType = {
  id: string
  header?: string | string[] | ReactNode
  footer?: string | string[]
  animationData?: unknown
}

export const Slide: FC<OwnPropertyType> = React.memo(
  ({ header, footer, animationData }) => {
    const { componentWidth, componentHeight, animationSize, fontSize } =
      useAppSize()

    return (
      <div className="flex flex-col items-center justify-center">
        <Paper>
          <div
            className="flex flex-col items-center justify-center "
            style={{
              width: componentWidth,
              height: componentHeight,
              fontSize,
            }}>
            {header && Array.isArray(header) ? (
              header.map((ele, index) => (
                <h1 key={index} className="py-2">
                  {ele}
                </h1>
              ))
            ) : (
              <h1>{header}</h1>
            )}
            {typeof animationData !== 'undefined' && (
              <Lottie
                isPaused={false}
                isStopped={false}
                height={animationSize.height}
                width={animationSize.width}
                isClickToPauseDisabled
                options={{
                  ...defaultOptions,
                  animationData,
                }}
              />
            )}
            {footer && Array.isArray(footer) ? (
              footer.map((ele, index) => (
                <div key={index} className="py-2">
                  {ele}
                </div>
              ))
            ) : (
              <div>{footer}</div>
            )}
          </div>
        </Paper>
      </div>
    )
  },
  (prevProps, nextProps) => prevProps.id === nextProps.id
)
