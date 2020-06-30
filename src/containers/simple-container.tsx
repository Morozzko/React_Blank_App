import React, {useEffect} from "react";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../store/store";
import {actions, getData} from "../store/reducers/simple-reducer";
import SimplePageManager from "../components/SimplePageManager/SimplePageManager";


type OwnPropertyType = {
    isFetching: boolean
    toggleIsFetching: (isFetch:boolean) => void
    getData: (user: string) => void
}


function SimpleContainer(props: OwnPropertyType) {
    return (
        <SimplePageManager {...props}/>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        SimplePage: state.SimpleReducer

    }
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        toggleIsFetching: (isFetch:boolean) => dispatch(actions.toggleIsFetching(isFetch)),
        getData: (user: string) => dispatch(getData(user))
    }

};


export default connect(mapStateToProps, mapDispatchToProps)(SimpleContainer);
