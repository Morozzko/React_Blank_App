import React, {FC} from "react";
import {Style} from "./style";
import AppRouter from "../Router";


const App: FC = (props) => {

    console.log(process.env.REACT_APP_NOT_SECRET_CODE)

    return (
        <Style>
            <AppRouter/>
        </Style>
    )
}

export default App;
