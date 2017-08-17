import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";
import TileForm from '../components/tileForm.js';
import {setSearchTerm,loadTiles,editStateOfTiles,filteredTile,saveTileData} from '../actioncreators/actionCreators.js';
import { getData, updateData} from '../dataapi/api.js';

const mapStateToProps = state => ({
    searchTerm : state.searchTerm,
    shows: state.shows,
    editState: state.editState,
    filteredTileData : state.filteredTile,
    isSuccess : state.isSuccess
});

const mapDispatchToProps = (dispatch) => ({
    handleEditState(){
        dispatch(editStateOfTiles())
    },
    dispatchFilteredData(id){
        dispatch(filteredTile(id))
    },
    saveTileData(id,updatedObject){
        dispatch(saveTileData(id,updatedObject))
    }
});

const tileFormContainer = connect(mapStateToProps,mapDispatchToProps)(TileForm);

export default tileFormContainer;