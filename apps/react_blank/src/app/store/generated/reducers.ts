import { orderStore } from '@generated/hooks/order'
import { petStore } from '@generated/hooks/pet'

const generatedReducersList = {
  [orderStore.reducerPath]: orderStore.reducer,
  [petStore.reducerPath]: petStore.reducer,
}

// Этот файл нужен для импорта автоматически сгенерированных reducers в ваш store
export { generatedReducersList }
