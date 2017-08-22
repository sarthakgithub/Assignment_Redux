import { connect } from 'react-redux';
import TileForm from '../components/tileForm.jsx';
import { editStateOfTiles, filteredTile, saveTileData} from '../actioncreators/actionCreators.js';

const mapStateToProps = (state) => ({
    searchTerm : state.searchTerm,
    shows: state.shows,
    editState: state.editState,
    filteredTileData : state.filteredTile,
    isSuccess : state.isSuccess,
});

const mapDispatchToProps = (dispatch) => ({
    handleEditState(){
        dispatch(editStateOfTiles());
    },
    dispatchFilteredData(id){
        dispatch(filteredTile(id));
    },
    saveTileData(id, updatedObject){
        dispatch(saveTileData(id, updatedObject));
    },
});

const tileFormContainer = connect(mapStateToProps, mapDispatchToProps)(TileForm);

export default tileFormContainer;
