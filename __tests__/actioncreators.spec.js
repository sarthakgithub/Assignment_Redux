import React from 'react';
import renderer from 'react-test-renderer';
import * as types from '../src/actions/actions.js';
import * as actionCreator from '../src/actioncreators/actionCreators.js';

describe('actions', () => {
    it('should create an action for searchTerm', () => {
        const searchTermTest = '';
        const expectedAction = {
            type: types.SET_SEARCH_TERM,
            payload : searchTermTest
        };
        expect(actionCreator.setSearchTerm(searchTermTest)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for deleteSearchTerm', () => {
        const deleteSearchTermTest = '';
        const expectedAction = {
            type: types.DELETE_SEARCH_TERM,
            payload : deleteSearchTermTest
        };
        expect(actionCreator.deleteSearchTerm(deleteSearchTermTest)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for loading tiles', () => {
        const loadTiles = '';
        const expectedAction = {
            type: 'LOAD_TILES'
        };
        expect(actionCreator.loadTiles(loadTiles)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for edit state', () => {
        const editState = '';
        const expectedAction = {
            type : 'EDIT_STATE'
        };
        expect(actionCreator.editStateOfTiles(editState)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for filtered tile', () => {
        const id = 1;
        const expectedAction = {
            type : 'DISPATCH_FILTERED_TILE',
            id: 1
        };
        expect(actionCreator.filteredTile(id)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for save tile', () => {
        const id = 1;
        const obj = {};
        const expectedAction = {
            type : 'SAVE_TILE_DATA',
            id: 1,
            updatedObject: {}
        };
        expect(actionCreator.saveTileData(id,obj)).toEqual(expectedAction)
    })
});