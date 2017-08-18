import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";
import Search from '../components/search.js';
import {setSearchTerm,loadTiles} from '../actioncreators/actionCreators.js';

const mapStateToProps = state => ({
    shows: state.shows
});

const mapDispatchToProps = (dispatch) => ({
    loadTiles(){
        dispatch(loadTiles())
    }
});

const searchContainer = connect(mapStateToProps,mapDispatchToProps)(Search);

export default searchContainer;