import React from 'react'

type OwnPropertyType<T> = {
  items: T[]
  renderItem: (item: T, index?: number) => React.ReactNode
}

// Этот компонент является обобщенным компонентом для отображения массива элементов.
// Вместо того чтобы просто использовать map для преобразования массива элементов в JSX-элементы, компонент ArrayRender
// принимает массив items и функцию renderItem и обрабатывает их внутри себя.
// Основная цель этого компонента - упростить повторяющийся код при отображении списка элементов
// и обеспечить чистоту и модульность кода.

export const ArrayRender = <T extends unknown>({
  items,
  renderItem,
}: OwnPropertyType<T>): JSX.Element => (
  <>{items.map((item, index) => renderItem(item, index))}</>
)
