import { orderStore } from '@generated/hooks/order'
import { petStore } from '@generated/hooks/pet'

const generatedMiddlewaresList = [orderStore.middleware, petStore.middleware]

// Этот файл нужен для автоматической инъекции middlewares в ваш store
export { generatedMiddlewaresList }
