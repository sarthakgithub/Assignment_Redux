const DEFAULT_STATE = {
	searchTerm: 'Search by redux'
}

const setSearchTerm = (state, action) => Object.assign({},state,{searchTerm : action.payload });
 

const rootReducer = (state= DEFAULT_STATE,action) => {
	switch(action.type){
		case 'SET_SEARCH_TERM':
			return setSearchTerm(state,action);
		default:
			return state;
	}
}

export default rootReducer