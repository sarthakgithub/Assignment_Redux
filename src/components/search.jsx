import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import TileList from './tileList.jsx';
import PropTypes from 'prop-types';

class Search extends  React.PureComponent{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.loadTiles();
    }

    render(){
        return this.props.visibleShows && (
            <div className="searched">
                <input type="text" placeholder="search by title" value={this.props.searchTerm}
                       onChange={this.props.handleSearchTermChange} className="search form-control"/>

                <Link to={`/search/${this.props.searchTerm}`} className="searchOk">
                    <input type="button" value="OK" className="btn btn-primary"/>
                </Link>

                {
                     this.props.visibleShows.map(show => <TileList key={show.id} show={show} />)
                }
            </div>
        );
    }
}

Search.propTypes = {
    visibleShows: PropTypes.array,
    searchTerm : PropTypes.string,
    handleSearchTermChange : PropTypes.func
};

export default Search;