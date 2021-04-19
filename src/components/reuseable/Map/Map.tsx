import React from "react";


interface IMap<T> {
    items: T[]
    renderItem: (item: T) => React.ReactNode
}

export default function Map<T>(props: IMap<T>) {

}