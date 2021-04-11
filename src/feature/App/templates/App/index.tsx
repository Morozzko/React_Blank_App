import React, {FC} from "react";
import {Style} from "./style";
import AppRouter from "../Router";


const App: FC = (props) => {

    return (
        <Style>
            <AppRouter/>
        </Style>
    )
}

export default App;
