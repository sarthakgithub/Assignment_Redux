import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ tile,onEditToggle }) => {

    return (

        <div className="description form-group divTable">

            <div className="headRow">
                <div>Image Details</div>
            </div>

            <div className="divRow">
                <div className="divCell">Image Title :</div>
                <div className="divCell">{tile.title}</div>
            </div>

            <div className="divRow">
                <div className="divCell">Image Name :</div>
                <div className="divCell">{tile.name}</div>
            </div>

            <div className="divRow">
                <div className="divCell">country :</div>
                <div className="divCell">{tile.country}</div>
            </div>

            <button className="edit btn btn-primary" type="button" onClick={onEditToggle}>Edit</button>

        </div>
    );
};

Info.propTypes = {
    tile : PropTypes.object,
    onEditToggle : PropTypes.func
};

export default Info;