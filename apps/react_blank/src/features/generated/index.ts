import { useDeleteOrderMutation, useGetOrderByIdQuery, usePlaceOrderMutation } from './hooks/order'
import {
  useDeletePetMutation,
  useUpdatePetWithFormMutation,
  useGetPetByIdQuery,
  useFindPetsByTagsQuery,
  useFindPetsByStatusQuery,
  useAddPetMutation,
  useUpdatePetMutation,
} from './hooks/pet'

// Этот реэкспорт хуков нужен, если вдруг поменяются названия файлов
export {
  useDeleteOrderMutation,
  useGetOrderByIdQuery,
  usePlaceOrderMutation,
  useDeletePetMutation,
  useUpdatePetWithFormMutation,
  useGetPetByIdQuery,
  useFindPetsByTagsQuery,
  useFindPetsByStatusQuery,
  useAddPetMutation,
  useUpdatePetMutation,
}
