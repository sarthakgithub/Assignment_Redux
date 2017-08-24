import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import TileList from './tileList.jsx';
import PropTypes from 'prop-types';
import SearchBox from './searchBox.jsx';

class Search extends  React.PureComponent{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.loadTiles();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.searchTerm == '')
            nextProps.history.push('/home');
    }

    render(){
        return this.props.visibleShows && (
            <div>

                <SearchBox searchTerm={this.props.searchTerm} handleSearchTermChange={this.props.handleSearchTermChange}
                           deleteSearchTerm={this.props.deleteSearchTerm} />
                {
                    this.props.visibleShows.map(show => <TileList key={show.id} show={show} />)
                }

                {this.props.visibleShows.length ? '' : <div className="noSearch">No result found</div>}

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