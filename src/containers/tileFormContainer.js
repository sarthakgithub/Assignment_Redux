import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";
import TileForm from '../components/tileForm.js';
import {setSearchTerm,loadTiles,editStateOfTiles} from '../actioncreators/actionCreators.js';
import { getData, getVisibleTiles, updateData } from '../dataapi/api.js';

const mapStateToProps = state => ({
    searchTerm : state.searchTerm,
    shows: state.shows,
    editState: state.editState,
    filteredTileData : state.filteredTile
});

const mapDispatchToProps = (dispatch) => ({
    handleEditState(){
        dispatch(editStateOfTiles())
    },
    dispatchFilteredData(filteredTile) {
        dispatch({type: 'FILTERED_TILE_DATA', filteredTile});
    }
});

class tileFormContainer extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        const filteredTile = getVisibleTiles(this.props.shows,this.props.match.params.id)[0];
        this.props.dispatchFilteredData(filteredTile);
    }
    render() {
        return (
            <TileForm filteredTileDataToComponent={this.props.filteredTileData}/>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(tileFormContainer);