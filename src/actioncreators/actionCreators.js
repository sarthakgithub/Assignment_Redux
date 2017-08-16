import {SET_SEARCH_TERM} from '../actions/actions.js'

export function setSearchTerm(searchTerm){
	return {type : 'SET_SEARCH_TERM', payload : searchTerm}
}

export function loadTiles(){
	return{type: 'LOAD_TILES'}
}

export function editStateOfTiles(){
	return {type : 'EDIT_STATE'}
}