import {SET_SEARCH_TERM} from '../actions/actions.js'

export const setSearchTerm = (searchTerm) => ({
	type : 'SET_SEARCH_TERM', payload : searchTerm
});

export const deleteSearchTerm = (searchTerm) =>({
	type : 'DELETE_SEARCH_TERM', payload : searchTerm
});

export const loadTiles =() => ({
	type: 'LOAD_TILES'
});

export const editStateOfTiles = () => ({
	type : 'EDIT_STATE'
});

export const filteredTile = (id) =>  ({
	type : 'DISPATCH_FILTERED_TILE',id
});

export const saveTileData = (id,updatedObject) => ({
	type: 'SAVE_TILE_DATA',id,updatedObject
});