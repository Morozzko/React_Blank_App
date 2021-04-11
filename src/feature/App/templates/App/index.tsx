import React, {FC, useEffect} from "react";
import {Redirect, Route} from "react-router-dom";
import {Style} from "./style";
import {useThrottle} from "../../../../hooks/useThrottle";


const App: FC = (props) => {



    return (
        <Style>
            <Route exact path="/" render={() => <p>s</p>}/>
            <Route exact path="/:collateralid"
                   render={() =><p>2</p>}/>
                   <Redirect to="/w"/>
        </Style>
    )
}

export default App;
