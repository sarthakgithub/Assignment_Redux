import React from "react";
import {delay} from "redux-saga";
import {call,put,takeEvery,all} from "redux-saga/effects";
import * as actionTypes from "../actions/actions.js";
import {getData} from '../dataapi/api.js';

export function* watchTilesAsync(){
    const shows = yield call(getData);
    yield put({type: 'LOADED_TILES', shows});
}
export function* watchTilesSaga(){
    yield takeEvery(actionTypes.LOAD_TILES,watchTilesAsync);
}

export default function* rootSaga() {
    yield all([watchTilesSaga()])
}
