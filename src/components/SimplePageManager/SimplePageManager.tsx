import React from "react";

type OwnPropertyType={
    isFetching: boolean
    toggleIsFetching: (isFetch:boolean) => void
    getData: (user: string) => void
}


export default function SimplePageManager(props:OwnPropertyType) {

    return(
        <div>
            SimplePage
        </div>
    )

}