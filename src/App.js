import React, {lazy, Suspense} from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import LoadingPage from './UI/LoadingPage/LoadingPage';
import {WrappedContext} from './context/Context/withContext'

const Homepage = lazy(()=>import('./containers/Homepage/Homepage'));
const ProductPage = lazy(()=>import('./containers/ProductPage/ProductPage'));
const PizzaPage = lazy(()=>import('./containers/ProductPage/ItemPage/PizzaPage'));
const SideDishPage = lazy(()=>import('./containers/ProductPage/ItemPage/SideDishPage'));
const BeveragePage = lazy(()=>import('./containers/ProductPage/ItemPage/BeveragePage'));
const DessertPage = lazy(()=>import('./containers/ProductPage/ItemPage/DessertPage'));
const SignUpPage = lazy(()=>import('./containers/AuthenticationPage/SignUpPage/SignUpPage'));
const SignInPage = lazy(()=>import('./containers/AuthenticationPage/SignInPage/SignInPage'));
const PromotionPage = lazy(()=>import('./containers/PromotionPage/PromotionPage'));
const AboutPage = lazy(()=>import('./containers/AboutPage/AboutPage'));
const ContactPage = lazy(()=>import('./containers/ContactPage/ContactPage'));

const App = () =>{

  return (
    <WrappedContext>

      <div className="App">

        <Suspense fallback={<LoadingPage/>}>
          <Switch>
            <Route path = '/' exact component={Homepage}/>
            <Route path = '/category' exact component={ProductPage}/>
            <Route path = '/pizza' component={PizzaPage}/>
            <Route path = '/sidedish' component={SideDishPage}/>
            <Route path = '/beverage' component={BeveragePage}/>
            <Route path = '/dessert' component={DessertPage}/>
            <Route path = '/signup' component={SignUpPage}/>
            <Route path = '/signin' component={SignInPage}/>
            <Route path = '/promotion' component={PromotionPage}/>
            <Route path = '/about' component={AboutPage}/>
            <Route path = '/contact' component={ContactPage}/>
          </Switch>
        </Suspense>

      </div>

    </WrappedContext>
  );
} 

export default App;
