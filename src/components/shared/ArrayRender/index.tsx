import React from 'react';

interface IList<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function ArrayRender<T>(props: IList<T>) {
  //<Shared.ArrayRender items={items} renderItem={(item)=><itemTemplate key/>}
  return <>{props.items.map(props.renderItem)}</>;
}
