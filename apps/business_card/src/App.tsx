import { useOnKeyPress } from '@npm.piece/utils'
import React, { useCallback, useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import SwappableViews from 'react-swipeable-views'
import atomJSON from './assets/animations/atom-css-customisible.json'
import code from './assets/animations/code-animation.json'
import manJSON from './assets/animations/man-working-on-system.json'
import rocketJSON from './assets/animations/rocket.json'
import testing from './assets/animations/testing.json'
import styleJSON from './assets/animations/topset-drag-and-drop.json'
import webpack from './assets/animations/webpack.json'
import server from './assets/animations/working-server-animation.json'
import { Telegram } from './assets/svg/telegram'
import { BG } from './components/bg/'
import { Slide } from './components/Slide/'

import { AppSizeProvider } from './context/AppSizeContext'

const link = 'https://t.me/morozzko'
const Pages = [
  {
    id: '1',
    header: 'Привет, я React разработчик',
    footer: ' Свайпайте вправо, чтобы узнать про меня больше',
    animationData: manJSON,
  },
  {
    id: '2',
    header:
      'Я работал с: ЦБ РФ, ВТБ, Raiffeisen, Альфабанк, Росстат, ЗИТ Инфотранс, Адамас, Газпром, Минтранс, Глосав, Cyber-Rom, Trinity-Monsters',
    animationData: code,
  },
  {
    id: '3',
    header: 'Мой Core в Enterprise разработке:',
    footer: [
      'React / Next.js / Electron.js+React',
      'Typescript / Hooks (Пишу кастомные)',
      'ModuleFederation / MicroFrontends',
    ],
    animationData: rocketJSON,
  },
  {
    id: '4',
    header: [
      'Больше всего люблю Redux-Toolkit',
      'но в своей работе пробовал почти все:',
    ],
    footer: [
      'Redux',
      'Redux-toolkit / Thunk / Saga',
      'MobX, Jotai, Effector, useQuery',
    ],
    animationData: atomJSON,
  },
  {
    id: '5',
    header: 'REST, GraphQL, WS, SSE, WebRPCs - все умею, практикую',
    footer: [
      'Axios',
      'Apollo',
      'Socket.IO / Websockets',
      'Photon',
      'А также автогенерация по OpenAPI или ProtoBuf',
    ],
    animationData: server,
  },
  {
    id: '6',
    header: ['Кстати в отличии от многих,', 'я могу заниматься версткой'],
    footer: [
      'Styled Components / @emotion',
      'SCSS / SASS modules ',
      'PostCSS',
      'Tailwind',
    ],
    animationData: styleJSON,
  },
  {
    id: '7',
    header: ['Пишу unit и screenshot тесты', 'и настраиваю code style'],
    footer: ['Jest / Cypress', 'Storybook', 'es-lint / prettier'],
    animationData: testing,
  },
  {
    id: '8',
    header: ['Могу писать backend на Nest.js', 'и смарт-контракты на Solidity'],
    footer: [
      'Drag & Drop',
      'Rechart / Vis / Canvas',
      'yarn-workspace / turborepo / lerna',
      'webpack / rollup / vite / TreeShaking',
    ],
    animationData: webpack,
  },
  {
    id: '9',
    header: (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{ color: 'rgba(230, 87, 6)' }}>
        Связь со мной
      </a>
    ),
  },
]

const Main: FC = () => {
  const [state, setState] = useState<number>(0)
  // const [isShown, setIsShown] = useState<boolean>(false)

  const onPressRightHandler = useCallback(() => {
    setState(prevState => {
      if (prevState < Pages.length - 1) {
        return ++prevState
      } else return 0
    })
  }, [])

  const onPressLefttHandler = useCallback(() => {
    setState(prevState => {
      if (!prevState) {
        return Pages.length - 1
      } else return --prevState
    })
  }, [])

  useOnKeyPress(onPressLefttHandler, 'ArrowLeft')
  useOnKeyPress(onPressRightHandler, 'ArrowRight')

  // const ref = useEffect(() => {}, [])

  return (
    <div
      className="relative flex h-screen w-screen select-none flex-col items-center justify-center"
      onContextMenu={e => e.preventDefault()}>
      <BG />
      <div className="absolute flex h-screen w-screen flex-col items-center justify-center text-center">
        <SwappableViews
          enableMouseEvents
          className="w-full"
          index={state}
          onChangeIndex={index => setState(index)}>
          {Pages.map(ele => (
            <Slide key={ele.id} {...ele} />
          ))}
        </SwappableViews>
      </div>
      <a
        href={link}
        target="_blank"
        className="absolute bottom-4 right-4 z-30 flex items-center justify-center"
        rel="noreferrer">
        <Telegram />
      </a>
      {/* <FloatingPanel side="right" visible={isShown}>*/}
      {/*	<Paper>213</Paper>*/}
      {/* </FloatingPanel>*/}
    </div>
  )
}
export const App = () => (
  <AppSizeProvider>
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
        </Route>
        <Route path="*" element={<Main />} />
      </Routes>
    </HashRouter>
  </AppSizeProvider>
)
