import NotFound from "components/organics/404";
import {RouterComponentType} from "../../types";

export const Routes: RouterComponentType[] = [
    {
        path:"",
        exact:true,
        component:NotFound
    }
]