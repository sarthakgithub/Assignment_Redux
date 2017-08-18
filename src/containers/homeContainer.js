import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";
import Home from '../components/home.js';
import {setSearchTerm,loadTiles,deleteSearchTerm} from '../actioncreators/actionCreators.js';
import {getData} from '../dataapi/api.js';

const mapStateToProps = state => ({
	searchTerm : state.searchTerm,
	shows: state.shows
});

const mapDispatchToProps = (dispatch) => ({
	loadTiles(){
		dispatch(loadTiles())
	},
	handleSearchTermChange(event){
		dispatch(setSearchTerm(event.target.value))
	},
	deleteSearchTerm(event){
		dispatch(deleteSearchTerm(event.target.value));
	}
});

const HomeContainer = connect(mapStateToProps,mapDispatchToProps)(Home);

export default HomeContainer;