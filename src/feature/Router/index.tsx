import React, {FC} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Routes} from "./routes";


const AppRouter: FC = () => {

    return (
        <Switch>
            {
                Routes.map(route => <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    render={()=>route.component}/>
                )
            }
            <Redirect to="/NotFound"/>
        </Switch>
    )
}

export default AppRouter;
