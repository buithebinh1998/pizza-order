import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Homepage from './containers/Homepage/Homepage';
import ProductPage from './containers/ProductPage/ProductPage';
import PizzaPage from './containers/ProductPage/ItemPage/PizzaPage'
import SideDishPage from './containers/ProductPage/ItemPage/SideDishPage'
class App extends Component {
  render(){
    return (
      <div className="App">
        <Switch>
          <Route path = '/' exact component={Homepage}/>
          <Route path = '/productpage' component={ProductPage}/>
          <Route path = '/pizzapage' component={PizzaPage}/>
          <Route path = '/sidedishpage' component={SideDishPage}/>
        </Switch>
      </div>
    );
  } 
}

export default App;
