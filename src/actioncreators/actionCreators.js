import {SET_SEARCH_TERM} from '../actions/actions.js'

export function setSearchTerm(searchTerm){
	return {type : 'SET_SEARCH_TERM', payload : searchTerm}
}

export function deleteSearchTerm(searchTerm){
	return {type : 'DELETE_SEARCH_TERM', payload : searchTerm}
}

export function loadTiles(){
	return{type: 'LOAD_TILES'}
}

export function editStateOfTiles(){
	return {type : 'EDIT_STATE'}
}

export function filteredTile(id){
	return {type : 'DISPATCH_FILTERED_TILE',id}
}

export function saveTileData(id,updatedObject){
	return{type: 'SAVE_TILE_DATA',id,updatedObject}
}