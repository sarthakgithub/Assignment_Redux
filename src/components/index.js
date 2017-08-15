import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import _ from 'lodash';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '../css/module1.css';
import App from './App.js';
import TileList from './tileList.js';
import Home from './home.js';
import Search from './search.js';
import reducer from '../reducers/reducers.js';

const store = createStore(reducer)

render(
	<Provider store={store}>
		<App />
	</Provider>,document.getElementById('container'));