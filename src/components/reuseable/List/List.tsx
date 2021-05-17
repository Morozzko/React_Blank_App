import React from 'react';

interface IList<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: IList<T>) {
  //<RE.List items={items} renderItem={(item)=><itemTemplate key/>}
  return <>{props.items.map(props.renderItem)}</>;
}
