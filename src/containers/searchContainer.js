import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";
import Search from '../components/search.js';
import {setSearchTerm,loadTiles} from '../actioncreators/actionCreators.js';
import {makeGetVisibleShows} from '../reselect/selector.js'

const makeMapStateToProps = () => {
    const getVisibleShowsState = makeGetVisibleShows();
    const mapStateToProps = (state, props) => {
        return {
            shows: state.shows,
            visibleShows :getVisibleShowsState(state,props)
        }
    };
    return mapStateToProps
};

const mapDispatchToProps = (dispatch) => ({
    loadTiles(){
        dispatch(loadTiles())
    }
});

const searchContainer = connect(makeMapStateToProps,mapDispatchToProps)(Search);

export default searchContainer;

