import React, {lazy, Suspense, Component} from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import LoadingPage from './UI/LoadingPage/LoadingPage';

const Homepage = lazy(()=>import('./containers/Homepage/Homepage'));
const ProductPage = lazy(()=>import('./containers/ProductPage/ProductPage'));
const PizzaPage = lazy(()=>import('./containers/ProductPage/ItemPage/PizzaPage'));
const SideDishPage = lazy(()=>import('./containers/ProductPage/ItemPage/SideDishPage'));
const BeveragePage = lazy(()=>import('./containers/ProductPage/ItemPage/BeveragePage'));
const DessertPage = lazy(()=>import('./containers/ProductPage/ItemPage/DessertPage'));
const SignUpPage = lazy(()=>import('./containers/AuthenticationPage/SignUpPage/SignUpPage'));
const SignInPage = lazy(()=>import('./containers/AuthenticationPage/SignInPage/SignInPage'));
const PromotionPage = lazy(()=>import('./containers/PromotionPage/PromotionPage'));

class App extends Component {
  render(){
    return (
      <div className="App">
        <Suspense fallback={<LoadingPage/>}>
          <Switch>
            <Route path = '/' exact component={Homepage}/>
            <Route path = '/category' exact component={ProductPage}/>
            <Route path = '/category/pizza' exact component={PizzaPage}/>
            <Route path = '/category/sidedish' exact component={SideDishPage}/>
            <Route path = '/category/beverage' exact component={BeveragePage}/>
            <Route path = '/category/dessert' exact component={DessertPage}/>
            <Route path = '/signup' component={SignUpPage}/>
            <Route path = '/signin' component={SignInPage}/>
            <Route path = '/promotion' component={PromotionPage}/>
          </Switch>
        </Suspense>
      </div>
    );
  } 
}

export default App;
