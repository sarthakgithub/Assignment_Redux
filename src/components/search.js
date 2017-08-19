 import React from 'react';
 import {render} from 'react-dom';
 import {BrowserRouter as Router, Route, Link} from "react-router-dom";
 import {IndexRoute} from 'react-router';
 import TileList from './tileList.js';

 class Search extends  React.PureComponent{
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
                    this.props.visibleShows.map(show => <TileList key={show.id} show={show} />)
                 }

             </div>
         );
     }
 }

 export default Search;