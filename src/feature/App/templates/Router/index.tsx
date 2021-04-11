import React, {FC} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import NotFound from "../../../../components/organics/404";


const AppRouter: FC = () => {

    return (
        <Switch>
                <Route exact path="/" render={() => <p>s</p>}/>
                <Route exact path="/404" render={() => <NotFound/>}/>

                <Redirect to="/404"/>
        </Switch>
    )
}

export default AppRouter;
