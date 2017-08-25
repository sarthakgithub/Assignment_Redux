 import React from 'react';
 import * as types from '../src/constants/constants.js';
 import * as actionCreator from '../src/actioncreators/actionCreators.js';
 import sagaHelper from 'redux-saga-testing';
 import { call, put } from 'redux-saga/effects';
 import {getData,getFilteredData,updateData} from '../src/dataapi/api.js';
 import * as sagas from '../src/sagas/saga.js';

 describe('test', () => {
     it('loading saga', () => {
         const it = sagas.watchTilesAsync();
         expect(it.next().value).toEqual(call(getData));
         expect(it.next().value).toEqual(put({type: 'LOADED_TILES', undefined}));
     })
 });

 describe('test', () => {
     it('filtered tile saga', () => {
         const it = sagas.watchFilteredTile({'id':'12'});
         expect(it.next().value).toEqual(call(getFilteredData,'12'));
         expect(it.next().value).toEqual(put({type:'FILTERED_TILE_TO_REDUCER', undefined}));
     })
 });

 describe('test', () => {
     it('updated json saga', () => {
         const it = sagas.watchSaveTileData({'id':'2','updatedObject':{}});
         expect(it.next().value).toEqual(call(updateData,'2',{}));
         expect(it.next().value).toEqual(put({type:'UPDATED_JSON_DATA',undefined}));
     })
 });
