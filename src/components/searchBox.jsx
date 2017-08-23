import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import PropTypes from 'prop-types';

class SearchBox extends React.PureComponent{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        if(this.props.searchTerm === ''){
            e.preventDefault();
        }
    }
    render(){
        return (
            <div>
                <input type="text" placeholder="Search by title" value={this.props.searchTerm}
                       onChange={this.props.handleSearchTermChange} className="search form-control"/>

                { this.props.searchTerm ?
                    <span onClick={this.props.deleteSearchTerm}
                          className="glyphicon glyphicon-remove"></span> : ''
                }

                <Link to={`/search/${this.props.searchTerm}`} className="searchOk">
                    <input type="button" value="OK" className="btn btn-primary" onClick={this.handleClick}/>
                </Link>
            </div>
        )
    }
}

SearchBox.propTypes = {
    searchTerm : PropTypes.string,
    deleteSearchTerm : PropTypes.func,
    handleSearchTermChange : PropTypes.func
};

export default SearchBox;