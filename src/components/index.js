import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import _ from 'lodash';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import '../css/module1.css';
import App from './App.js';
import TileList from './tileList.js';
import Home from './home.js';
import reducer from '../reducers/reducers.js';
import {rootSaga} from '../sagas/saga.js';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
render(
	<Provider store={store}>
		<App />
	</Provider>,document.getElementById('container'));