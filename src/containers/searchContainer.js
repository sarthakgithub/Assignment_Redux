import { connect } from 'react-redux';
import Search from '../components/search.jsx';
import {setSearchTerm, deleteSearchTerm, loadTiles} from '../actioncreators/actionCreators.js';
import {makeGetVisibleShows} from '../reselect/selector.js';

const makeMapStateToProps = () => {
    const getVisibleShowsState = makeGetVisibleShows();
    const mapStateToProps = (state, props) => {
        return {
            shows: state.shows,
            searchTerm : state.searchTerm,
            visibleShows : getVisibleShowsState(state, props),
        };
    };
    return mapStateToProps;
};

const mapDispatchToProps = (dispatch) => ({
    loadTiles(){
        dispatch(loadTiles());
    },
    handleSearchTermChange(event){
        dispatch(setSearchTerm(event.target.value));
    },
    deleteSearchTerm(event){
        dispatch(deleteSearchTerm(event.target.value));
    },
});

const searchContainer = connect(makeMapStateToProps, mapDispatchToProps)(Search);

export default searchContainer;
