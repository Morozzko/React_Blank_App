import React, {FC} from "react";
import {Route, Switch} from "react-router-dom";



const AppRouter: FC = () => {

    return (
        <Switch>


            <Route exact path="/2/" render={() => <div/>}/>
            <Route exact path="/2/:collateralid?"
                   render={() => <div/>}/>
        </Switch>
    )
}

export default AppRouter;
