import React, {FC} from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../../../store/store";
import App from "../templates/App";


const Container: FC = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App {...props}/>
      </Provider>
    </BrowserRouter>
  );
};

export default Container;