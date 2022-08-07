import React from 'react'

interface IList<T> {
  items: T[]
  renderItem: (item: T, index?: number) => React.ReactNode
}

/**
 *
 *  <ArrayRender items={items} renderItem={(item)=><itemTemplate key/>}/>
 *
 **/
export function ArrayRender<T>(props: IList<T>) {
  return <>{props.items.map(props.renderItem)}</>
}
