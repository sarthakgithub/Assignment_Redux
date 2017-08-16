import React from 'react';
import {render} from 'react-dom';
import '../css/module1.css';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";
import {provider} from 'react-redux';
//import TileList from './tileList.js';
import HomeContainer from '../containers/homeContainer.js';
import searchContainer from '../containers/searchContainer.js';
import tileFormContainer from '../containers/tileFormContainer.js';
//import Search from './search.js';
// import TileForm from './tileForm.js';


class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <div className="navBar">
                    <ul className="navBarTabLinks">
                        <li className="navLinks" ><Link to="/home">Home</Link></li>

                    </ul>
                    <Switch>
                        <Redirect exact from="/" to="/home"/>
                        <Route  path="/home" component={HomeContainer}/>
                        <Route  path="/search/:id" component={searchContainer}/>
                        <Route  path="/details/:id" component={tileFormContainer}/>
                    </Switch>
                </div>

            </Router>
        );
    }
}

export default App;