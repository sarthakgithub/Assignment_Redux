import React from 'react';
import {makeGetVisibleShows,getSearchTerm} from '../src/reselect/selector.js';

describe('reselect', () => {
    it('selector test', () => {
        const searchTermTest = '';
        const props= {"match":{"params":{"id":'first'}}};
        const getShows=[{"title":"first"},{"title":"second"}];
        console.log(typeof getSearchTerm);
        const getSearchTerm = getSearchTerm(getShows,props);
        const expectedAction = {"title":"first"};
        expect(makeGetVisibleShows(getShows,getSearchTerm)).toEqual(expectedAction);
    })
});