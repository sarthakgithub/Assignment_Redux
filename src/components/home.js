import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {IndexRoute} from 'react-router';
// import TileList from './tileList.js';
// import Search from './search.js';
import { connect } from 'react-redux';
import {getData} from '../dataapi/api.js';
import _ from 'lodash';

class Home extends React.Component{
	constructor(props){
		super(props);
		// this.state = {
		// 	searchTerm : '',
		// 	shows:[]
		// };
		// this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
		// this.showAllTiles = this.showAllTiles.bind(this);
		// this.handleClick = this.handleClick.bind(this);
	}
	// handleSearchTermChange(event){
	// 	this.setState({
	// 		searchTerm : event.target.value
	// 	});
	// }
	// showAllTiles(event){
	// 	this.setState({
	// 		searchTerm : ''
	// 	});
	// }
	// componentDidMount(){
	// 	getData().then(shows => {
	// 		this.setState({shows});

	// 	},error => {
	// 		console.log(error);
	// 	});
	// }
		componentDidMount(){
			this.props.loadTiles();
		}
	// handleClick(e){
	// 	if(this.state.searchTerm === ''){
	// 		e.preventDefault();
	// 	}
	// }
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
					<div> a </div>
					</div>

				</div>

			</div>
		);
	}
}

export default Home;