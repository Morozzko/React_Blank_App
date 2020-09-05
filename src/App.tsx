import React from 'react';
import './App.css';
import SimpleContainer from "./containers/simple-container";
import { Route } from 'react-router-dom';
import PageLittle from "./components/SimplePageManager/PageLittle";

export default function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <SimpleContainer/>}/>
      <Route path="/simple/:id?" render={() => <PageLittle />}/>

    </div>
  );
}

