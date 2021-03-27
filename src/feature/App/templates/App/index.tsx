import React, {FC} from "react";
import {Route} from "react-router-dom";
import { Sample } from "../../../Sample";
import {Style} from "./style";


const App: FC = (props) => {
    return (
        <Style>

            <Sample.Container/>
            <Route exact path="/2/" render={() => <div/>}/>
            <Route exact path="/2/:collateralid?"
                   render={() => <div/>}/>
        </Style>
    )
}

export default App;
