import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {IndexRoute} from 'react-router';
import { connect } from 'react-redux';
import {getData} from '../dataapi/api.js';
import _ from 'lodash';
import TileList from './tileList.js';

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
		return(
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
							_.map(this.props.shows, (show => <TileList key={show.id} show={show} />))

						}
					</div>

				</div>

			</div>
		);
	}
}

export default Home;