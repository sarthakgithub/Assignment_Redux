const DEFAULT_STATE = {
	searchTerm: '',
	shows:[],
	editState: false,
	filteredTile : {}
};

const setSearchTerm = (state, action) => Object.assign({},state,{searchTerm : action.payload });
 

const rootReducer = (state= DEFAULT_STATE,action) => {
	switch(action.type){
		case 'SET_SEARCH_TERM':
			return setSearchTerm(state,action);
		case 'DELETE_SEARCH_TERM':
			return Object.assign({},state,{searchTerm:''});
		case 'LOADED_TILES':
			return Object.assign({},state,{shows : action.shows });
		case 'EDIT_STATE':
			return Object.assign({},state,{editState:!state.editState});
		case 'FILTERED_TILE_TO_REDUCER':
			return Object.assign({},state,{filteredTile : action.showFiltered});
		case 'UPDATED_JSON_DATA':
			return Object.assign({},state,{filteredTile: action.updatedJsonData,editState:!state.editState});
		default:
			return state;
	}
};

export default rootReducer