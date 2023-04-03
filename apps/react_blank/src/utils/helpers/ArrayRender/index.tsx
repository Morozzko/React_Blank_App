import React from 'react'

type OwnPropertyType<T> = {
  items: T[]
  renderItem: (item: T, index?: number) => React.ReactNode
}

/**
 *
 *  <ArrayRender items={items} renderItem={(item)=><itemTemplate key/>}/>
 *
 **/
export const ArrayRender = <T extends unknown>({ items, renderItem }: OwnPropertyType<T>): JSX.Element => (
  <>{items.map((item, index) => renderItem(item, index))}</>
)
