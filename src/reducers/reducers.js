const DEFAULT_STATE = {
	searchTerm: 'Search by redux',
	shows:[],
	editState: false,
	filteredTile : {}
}

const setSearchTerm = (state, action) => Object.assign({},state,{searchTerm : action.payload });
 

const rootReducer = (state= DEFAULT_STATE,action) => {
	switch(action.type){
		case 'SET_SEARCH_TERM':
			return setSearchTerm(state,action);
		case 'LOADED_TILES':
			console.log('shows: ---->', action.shows);
			return Object.assign({},state,{shows : action.shows });
		case 'EDIT_STATE':
			return Object.assign({},state,{editState:true});
		case 'FILTERED_TILE_DATA':
			return Object.assign({},state,{filteredTile : action.filteredTile});
		default:
			return state;
	}
}

export default rootReducer