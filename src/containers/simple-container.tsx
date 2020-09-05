import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType,} from "../store/store";
import SimplePageManager from "../components/SimplePageManager/SimplePageManager";


export default function SimpleContainer() {

    const dispatch=useDispatch()
    const simple=useSelector<AppStateType, any>(state => state.SimpleReducer)



    return (
        <SimplePageManager />
    )
}


// const callbacks {
//         toggleIsFetching: (isFetch:boolean) => dispatch(actions.toggleIsFetching(isFetch)),
//         getData: (user: string) => dispatch(getData(user))
//     }

