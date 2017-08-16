 import React from 'react';
 import {render} from 'react-dom';
 import {BrowserRouter as Router, Route, Link} from "react-router-dom";
 import {IndexRoute} from 'react-router';
 import TileList from './tileList.js';

 class Search extends  React.Component{
     constructor(props){
         super(props);
     }
     componentDidMount(){
         this.props.loadTiles();
     }
     render(){
         return(
             <div className="searched">
                 {
                     this.props.shows.filter(show => `${show.title.toLowerCase()}`.indexOf((this.props.match.params.id).toLowerCase()) >=0).map(show => <TileList key={show.id} show={show} />)
                 }

             </div>
         );
     }
 }

 export default Search;