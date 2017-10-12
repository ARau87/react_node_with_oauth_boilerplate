import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

//Imported the combinedReducers
import rootReducer from './reducers';

// Create the store for redux
let store = createStore(rootReducer,applyMiddleware());

ReactDOM.render(
                <Provider store={store}>
                  <BrowserRouter>
                    <Switch>
                    </Switch>
                  </BrowserRouter>
                </Provider>
                , document.getElementById('app'));
