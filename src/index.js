import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import PromiseMiddleware from 'redux-promise';
import {Provider} from 'react-redux';
import reducers from './reducers/reducers';

const store = createStore(reducers, applyMiddleware(PromiseMiddleware))
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ Provider>, document.getElementById('root'));
// registerServiceWorker();
serviceWorker.unregister();
