import { connect } from 'react-redux';
import Home from '../components/home.jsx';
import {setSearchTerm, loadTiles, deleteSearchTerm} from '../actioncreators/actionCreators.js';

const mapStateToProps = (state) => ({
    searchTerm: state.searchTerm, shows: state.shows,
});

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
    deleteSearchTermByValue(val){
        dispatch(deleteSearchTerm(val));
    },
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;