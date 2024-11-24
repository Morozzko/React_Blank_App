import { orderStore } from '@generated/hooks/order'

const generatedMiddlewaresList = [orderStore.middleware]

// Этот файл нужен для автоматической инъекции middlewares в ваш store
export { generatedMiddlewaresList }
