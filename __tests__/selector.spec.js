import React from 'react';
import {makeGetVisibleShows} from '../src/reselect/selector.js';

describe('test', () => {
    it('testing selector', () => {
        const it = makeGetVisibleShows();
        const dummyState = {"shows":[{"id":"1","title":"First Image"},{"id":"2","title":"second image"}]};
        const getShows = dummyState;
        const getSearchTerm = {"match":{"params":{"id":"First"}}};
        const expectedOutput = [{"id":"1","title":"First Image"}];
        expect(it(getShows,getSearchTerm)).toEqual(expectedOutput);
    })
});