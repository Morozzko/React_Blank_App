import { orderStore } from '@generated/hooks/order'
import { petStore } from '@generated/hooks/pet'

const generatedMiddlewaresList = [orderStore.middleware, petStore.middleware]

export { generatedMiddlewaresList }
