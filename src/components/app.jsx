import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";
import HomeContainer from '../containers/homeContainer.js';
import searchContainer from '../containers/searchContainer.js';
import tileFormContainer from '../containers/tileFormContainer.js';
import NotFound from './notFound.jsx';

class App extends React.PureComponent{
    render(){
        return(
            <Router>
                <div className="navBar">
                    <ul className="navBarTabLinks">
                        <li className="navLinks" ><Link to="/home">Home</Link></li>

                    </ul>
                    <Switch>
                        <Redirect exact from="/" to="/home"/>
                        <Route  path="/home" component={HomeContainer}/>
                        <Route  path="/search/:id" component={searchContainer}/>
                        <Route  path="/details/:id" component={tileFormContainer}/>
                        <Route path="/404" component={NotFound} />
                        <Redirect from="*" to="/404" />
                    </Switch>
                </div>

            </Router>
        );
    }
}

export default App;