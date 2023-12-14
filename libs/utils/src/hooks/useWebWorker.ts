import { useEffect } from 'react'

type UseWebWorkerType<T extends unknown, K extends unknown> = {
  isEnabled?: boolean
  worker: Worker
  postMessageData?: T
  onMessage?: (data: MessageEvent<K>) => void
}

/**
 * The useWebWorker function is a React hook that creates a new Web Worker and
 * returns the worker instance. The function takes an object as its only argument,
 * which can have the following properties:
 *
 *
 * @param deps Specify the dependencies of the useEffect hook
 * @param isEnabled Enable or disable the web worker
 * @param onMessage Call a callback function when the worker sends a message
 * @param postMessageData Send data to the web worker
 * @param workerPath Specify the path to the web worker file
 *
 * @return void
 *
 */
export const useWebWorker = <T, K>(
  {
    isEnabled = true,
    onMessage,
    postMessageData,
    worker,
  }: UseWebWorkerType<T, K>,
  deps = [] as any[]
) => {
  // Подписка: Начало
  useEffect(() => {
    if (isEnabled) {
      // Отправка сообщений: Начало
      if (postMessageData) {
        worker.postMessage(postMessageData)
      }
      // Отправка сообщений: Конец

      // Вызов callback: Начало
      if (onMessage) {
        worker.onmessage = onMessage
      }
      // Вызов callback: Конец

      // Очищение памяти: Начало
      return () => {
        worker.terminate()
      }
      // Очищение памяти: Конец
    }
  }, deps)
  // Подписка: Конец
}
