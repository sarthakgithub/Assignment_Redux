import React from 'react';
import PropTypes from 'prop-types';
import {URL} from '../constants/constants.js';

const Info = (props) => {
    const {title,name,country,imagePath } = props.tile;
    const {onEditToggle} = props;
    return (

        <div className="description form-group divTable">
            <div className="tile">
                <img className="imgTile" alt={title} src={`${URL}${imagePath}`} />
            </div>

            <div className="detailBlock">
                <div className="headRow">
                    <div className="text-center">Image Details</div>
                </div>

                <div className="divRow">
                    <div className="divCell">Image Title :</div>
                    <div className="divCell">{title}</div>
                </div>

                <div className="divRow">
                    <div className="divCell">Image Name :</div>
                    <div className="divCell">{name}</div>
                </div>

                <div className="divRow">
                    <div className="divCell">country :</div>
                    <div className="divCell">{country}</div>
                </div>

                <button className="edit btn btn-primary" type="button" onClick={onEditToggle}>Edit</button>
            </div>

        </div>
    );
};

Info.propTypes = {
    tile : PropTypes.object,
    onEditToggle : PropTypes.func
};

export default Info;