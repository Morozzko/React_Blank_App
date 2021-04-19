import React, {FC} from "react";
import {AppStyle} from "./style";
import AppRouter from "../../../Router";
import {useLocalStorage} from "../../../../hooks/useLocalStorage";
import useInput from "../../../../hooks/useInput";


const App: FC = (props) => {

    return (
        <AppStyle>
            <AppRouter/>
        </AppStyle>
    )
}

export default App;
