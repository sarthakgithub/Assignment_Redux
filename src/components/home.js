import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {IndexRoute} from 'react-router';
// import TileList from './tileList.js';
// import Search from './search.js';
import { connect } from 'react-redux';
import {getData} from '../dataapi/api.js';
import _ from 'lodash';
import TileList from './tileList.js';

class Home extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.loadTiles();
	}

	render(){
		return(
			<div>
				<div className="parentBox container">
					<h1 className="headingTitle"> Image Gallery </h1>
					<div className="searchContainer">
					<input type="text" placeholder="search by title" value={this.props.searchTerm}
					onChange={this.props.handleSearchTermChange} className="search form-control"/>

					<Link to={`/search/${this.props.searchTerm}`} className="searchOk">
					<input type="button" value="OK" className="btn btn-primary"/></Link>
						{
							_.map(this.props.shows, (show => <TileList key={show.id} show={show} />))

						}
					</div>

				</div>

			</div>
		);
	}
}

export default Home;