import React, {FC} from 'react';
import {AppStyle} from './style';
import AppRouter from '../../../Router';
import {Condition} from "../../../Condition";

const App: FC = props => {

    return (
        <AppStyle>
            <AppRouter/>
            <Condition.Container/>
        </AppStyle>
    );
};

export default App;
