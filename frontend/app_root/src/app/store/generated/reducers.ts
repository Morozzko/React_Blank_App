import { orderStore } from '@generated/hooks/order'

const generatedReducersList = {
  [orderStore.reducerPath]: orderStore.reducer,
}

// Этот файл нужен для импорта автоматически сгенерированных reducers в ваш store
export { generatedReducersList }
