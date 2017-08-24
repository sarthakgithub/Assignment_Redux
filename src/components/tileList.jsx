import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import PropTypes from 'prop-types';

class TileList extends React.PureComponent {
    constructor(props){
        super(props);
    }
    render(){
        return this.props.show && (
            <Link to={`/details/${this.props.show.id}`}>
                <div className="tile">
                    <div className="details">Details</div>
                    <img className="imgTile" alt={this.props.show.title} src={this.props.show.imagePath} />
                    <div className="imgTitle">
                        <h3>{this.props.show.title}</h3>
                    </div>
                </div>
            </Link>
        );
    }
}

TileList.propTypes = {
    show : PropTypes.object,
    id : PropTypes.string,
    title: PropTypes.string,
    imagePath : PropTypes.string
};

export default TileList;