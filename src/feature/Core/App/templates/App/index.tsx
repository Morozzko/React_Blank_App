import React, {FC} from "react";
import {AppStyle} from "./style";
import AppRouter from "../../../Router";
import { SW } from "../../../../../styles/StyleWrappers";
import {useAppSelector} from "../../../../../utils/hooks/useAppSelector";


const App: FC = (props) => {
    return (
        <AppStyle>
            <SW.Flex/>
                вцй
            <AppRouter/>
        </AppStyle>
    )
}

export default App;
