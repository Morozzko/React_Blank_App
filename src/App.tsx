import React from 'react';
import './App.css';
import SimpleContainer from "./containers/simple-container";

export default function App() {
  return (
    <div className="App">
      <Route path="/simple" render={() => <SimpleContainer/>}/>

    </div>
  );
}

