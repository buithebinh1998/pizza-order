import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import {WrappedContext} from './context/Context/withContext'

const app = (
  <WrappedContext>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </WrappedContext>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
