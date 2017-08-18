import React from 'react';
import renderer from 'react-test-renderer';
import * as types from '../src/actions/actions.js';
import * as actionCreator from '../src/actioncreators/actionCreators.js';
import reducer from '../src/reducers/reducers.js';

describe('reducer', () => {
    it('set search term', () => {
        expect(reducer(undefined, {})).toEqual( {
            searchTerm: '',
            shows:[],
            editState: false,
            filteredTile : {}
        })
    })
});

describe('reducer', () => {
    it('set search term', () => {
        expect(reducer(undefined, {type:'SET_SEARCH_TERM',payload : 'search-Term'})).toEqual( {
            searchTerm: 'search-Term',
            shows:[],
            editState: false,
            filteredTile : {}
        })
    })
});

describe('reducer', () => {
    it('delete search term', () => {
        expect(reducer(undefined, {type:'DELETE_SEARCH_TERM',payload : 'delete-search-Term'})).toEqual( {
            searchTerm: '',
            shows:[],
            editState: false,
            filteredTile : {}
        })
    })
});

describe('reducer', () => {
    it('loaded tiles', () => {
        expect(reducer(undefined, {type:'LOADED_TILES',shows: ['1']})).toEqual( {
            searchTerm: '',
            shows:['1'],
            editState: false,
            filteredTile : {}
        })
    })
});

describe('reducer', () => {
    it('edit state', () => {
        expect(reducer(undefined, {type:'EDIT_STATE',editState: false})).toEqual( {
            searchTerm: '',
            shows:[],
            editState: true,
            filteredTile : {}
        })
    })
});

describe('reducer', () => {
    it('filtered tile to reducer', () => {
        expect(reducer(undefined, {type:'FILTERED_TILE_TO_REDUCER',showFiltered: {"title":"image1"}})).toEqual( {
            searchTerm: '',
            shows:[],
            editState: false,
            filteredTile : {"title":"image1"}
        })
    })
});

describe('reducer', () => {
    it('updated json data', () => {
        expect(reducer(undefined, {type:'UPDATED_JSON_DATA',updatedJsonData: {"title":"image1"},editState: false})).toEqual( {
            searchTerm: '',
            shows:[],
            editState: true,
            filteredTile : {"title":"image1"}
        })
    })
});