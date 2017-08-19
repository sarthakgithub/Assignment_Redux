import React from 'react';
import * as types from '../src/actions/actions.js';
import * as actionCreator from '../src/actioncreators/actionCreators.js';
import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import {getData} from '../src/dataapi/api.js';

const api = getData();
function* watchTilesAsync(){
    const shows = yield call(getData);
    yield put({type: 'LOADED_TILES', shows});
}

describe('testing saga that manipulates data',() => {
    const it = sagaHelper(watchTilesAsync());

    it('should call mock API to return some data',result => {
        expect(result).toEqual(call(api))

    })
});