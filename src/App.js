import React, {lazy, Suspense, Component} from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
//import Homepage from './containers/Homepage/Homepage';
//import ProductPage from './containers/ProductPage/ProductPage';
//import PizzaPage from './containers/ProductPage/ItemPage/PizzaPage'
//import SideDishPage from './containers/ProductPage/ItemPage/SideDishPage'
//import BeveragePage from './containers/ProductPage/ItemPage/BeveragePage'
//import DessertPage from './containers/ProductPage/ItemPage/DessertPage'
//import RegisterPage from './containers/AuthenticationPage/RegisterPage/RegisterPage'
//import LoginPage from './containers/AuthenticationPage/LoginPage/LoginPage'

const Homepage = lazy(()=>import('./containers/Homepage/Homepage'));
const ProductPage = lazy(()=>import('./containers/ProductPage/ProductPage'));
const PizzaPage = lazy(()=>import('./containers/ProductPage/ItemPage/PizzaPage'));
const SideDishPage = lazy(()=>import('./containers/ProductPage/ItemPage/SideDishPage'));
const BeveragePage = lazy(()=>import('./containers/ProductPage/ItemPage/BeveragePage'));
const DessertPage = lazy(()=>import('./containers/ProductPage/ItemPage/DessertPage'));
const RegisterPage = lazy(()=>import('./containers/AuthenticationPage/RegisterPage/RegisterPage'));
const LoginPage = lazy(()=>import('./containers/AuthenticationPage/LoginPage/LoginPage'));

class App extends Component {
  render(){
    return (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path = '/' exact component={Homepage}/>
            <Route path = '/category' exact component={ProductPage}/>
            <Route path = '/category/pizza' exact component={PizzaPage}/>
            <Route path = '/category/sidedish' exact component={SideDishPage}/>
            <Route path = '/category/beverage' exact component={BeveragePage}/>
            <Route path = '/category/dessert' exact component={DessertPage}/>
            <Route path = '/register' component={RegisterPage}/>
            <Route path = '/login' component={LoginPage}/>
          </Switch>
        </Suspense>
      </div>
    );
  } 
}

export default App;
