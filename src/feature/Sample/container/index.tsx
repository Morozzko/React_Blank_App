import React, {FC, useEffect} from "react";
import ThunkTemplate from "../templates/Sample";
import {useActions} from "../../../utils/Hooks";
import {Sample} from "../index";
import {GetUsersTC} from "../reducer/reducer";


const Container: FC = () => {
    const {GetUsersTC} = useActions(Sample.Actions)
    useEffect(()=>{
        GetUsersTC()
    },[])
    return <ThunkTemplate/>;
};

export default Container;