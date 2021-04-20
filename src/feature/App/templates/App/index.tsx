import React, {FC} from "react";
import {AppStyle} from "./style";
import AppRouter from "../../../Router";


const App: FC = (props) => {

    return (
        <AppStyle>
            <AppRouter/>
        </AppStyle>
    )
}

export default App;
