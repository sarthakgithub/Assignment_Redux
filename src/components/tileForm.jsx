import React from 'react';
import PropTypes from 'prop-types';
import Info from './info.jsx';
import InfoEdit from './infoEdit.jsx';


class TileForm extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatchFilteredData(this.props.match.params.id);
    }
    render() {
        return (
            <div>
                {
                    (this.props.editState ?
                    <div>
                        <InfoEdit onEditToggle={this.props.handleEditState} tile={this.props.filteredTileData} saveAction={this.props.saveTileData}/>
                        <Info onEditToggle={this.props.handleEditState} tile={this.props.filteredTileData} />
                    </div> : <Info onEditToggle={this.props.handleEditState} tile={this.props.filteredTileData} />)
                }
            </div>
        );
    }
}

TileForm.propTypes = {
  editState : PropTypes.bool,
  handleEditState : PropTypes.func,
  filteredTileData : PropTypes.object,
  saveTileData : PropTypes.func
};

export default TileForm;