import React from 'react'

interface IList<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

/**
 *
 *  <ArrayRender items={items} renderItem={(item)=><itemTemplate key/>}/>
 */
export default function ArrayRender<T>(props: IList<T>) {
  return <>{props.items.map(props.renderItem)}</>
}
