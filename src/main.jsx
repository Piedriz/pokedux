import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux'
import {logger} from './middlewares/index'
import { rootReducer } from './reducers/rootReducer';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk,logger));

const store = createStore(rootReducer,composedEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>


)
