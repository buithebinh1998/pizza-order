import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Homepage from './containers/Homepage/Homepage';
import ProductPage from './containers/ProductPage/ProductPage';
class App extends Component {
  render(){
    return (
      <div className="App">
          <Switch>
            <Route path = '/' exact component={Homepage}/>
            <Route path = '/productpage' component={ProductPage}/>
        </Switch>
      </div>
    );
  } 
}

export default App;
