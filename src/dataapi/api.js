import {URL} from '../constants/constants.js';

export const getData = () => {
    return fetch(URL + '/items/')
        .then((response) => response.json())
        .then((res) => {
            const shows = res.shows;
            return shows;
    })
};

export const updateData = (id, updatedObject) => {
    return fetch(URL + '/items/'+id, {
        method: 'put',
        body: JSON.stringify(updatedObject),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => response)
    .then((response) => response.json());

};

export const getFilteredData = (id) => {
    return fetch(URL + '/items/'+id).then((response) => response.json()).then((res) => {
        const shows = res.data;
        return shows;
    })
};
