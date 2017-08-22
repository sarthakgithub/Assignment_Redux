import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import _ from 'lodash';
import TileList from './tileList.jsx';
import PropTypes from 'prop-types';

class Home extends React.PureComponent{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.props.loadTiles();
    }

    handleClick(e){
        if(this.props.searchTerm === ''){
            e.preventDefault();
        }
    }

    render(){
        //console.log('shows type',typeof this.props.shows);
        return (
            <div>
                <div className="parentBox container">
                    <h1 className="headingTitle"> Image Gallery </h1>
                    <div className="searchContainer">
                        <input type="text" placeholder="search by title" value={this.props.searchTerm}
                               onChange={this.props.handleSearchTermChange} className="search form-control"/>

                        {this.props.searchTerm ?
                        <span onClick={this.props.deleteSearchTerm}
                              className="glyphicon glyphicon-remove"></span> : ''
                            }

                        <Link to={`/search/${this.props.searchTerm}`} className="searchOk">
                            <input type="button" value="OK" className="btn btn-primary" onClick={this.handleClick}/></Link>
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