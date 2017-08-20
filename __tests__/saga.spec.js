// import React from 'react';
// import * as types from '../src/actions/actions.js';
// import * as actionCreator from '../src/actioncreators/actionCreators.js';
// import sagaHelper from 'redux-saga-testing';
// import { call, put } from 'redux-saga/effects';
// import {getData} from '../src/dataapi/api.js';

// const api = getData();
// function* watchTilesAsync(){
//     const shows = yield call(getData);
//     yield put({type: 'LOADED_TILES', shows});
// }

// describe('testing saga that manipulates data',() => {
//     const it = sagaHelper(watchTilesAsync());

//     it('should call mock API to return some data',result => {
//         expect(result).toEqual(call(api))

//     })
// });

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