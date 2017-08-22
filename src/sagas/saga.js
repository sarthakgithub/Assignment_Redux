import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from '../actions/actions';
import { getData, getFilteredData, updateData } from '../dataapi/api';

export function* watchTilesAsync() {
    const shows = yield call(getData);
    yield put({ type: 'LOADED_TILES', shows });
}

export function* watchTilesSaga() {
    yield takeEvery(actionTypes.LOAD_TILES, watchTilesAsync);
}

export function* watchFilteredTile(action) {
    const showFiltered = yield call(getFilteredData, action.id);
    yield put({ type: 'FILTERED_TILE_TO_REDUCER', showFiltered });
}

export function* watchFilteredTileSaga() {
    yield takeEvery(actionTypes.DISPATCH_FILTERED_TILE, watchFilteredTile);
}

export function* watchSaveTileData(action) {
    const updatedJsonData = yield call(updateData, action.id, action.updatedObject);
    yield put({ type: 'UPDATED_JSON_DATA', updatedJsonData });
}

export function* watchSaveTileSaga() {
    yield takeEvery(actionTypes.SAVE_TILE_DATA, watchSaveTileData);
}

export function* rootSaga() {
    yield all([watchTilesSaga(), watchFilteredTileSaga(), watchSaveTileSaga()]);
}
