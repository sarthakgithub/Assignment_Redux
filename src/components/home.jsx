import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import _ from 'lodash';
import TileList from './tileList.jsx';
import PropTypes from 'prop-types';
import SearchBox from './searchBox.jsx';

class Home extends React.PureComponent{
    constructor(props){
        super(props);
        this.state= {
            searchTermValue : ''
        }
    }

    componentDidMount(){
        this.props.loadTiles();
        this.props.deleteSearchTermByValue(this.state.searchTermValue);
    }

    render(){
        return (
            <div>
                <div className="parentBox container">
                    <h1 className="headingTitle"> Image Gallery </h1>
                    <div className="searchContainer">

                        <SearchBox searchTerm={this.props.searchTerm} handleSearchTermChange={this.props.handleSearchTermChange}
                        deleteSearchTerm={this.props.deleteSearchTerm} />

                            {
                                this.props.shows &&
                                _.map(this.props.shows, (show => <TileList key={show.id} show={show} />))
                            }
                    </div>

                </div>

            </div>
        );
    }
}

Home.propTypes = {
    searchTerm : PropTypes.string,
    handleSearchTermChange : PropTypes.func,
    deleteSearchTerm : PropTypes.func,
    shows: PropTypes.array
};

export default Home;