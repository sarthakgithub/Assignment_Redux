import React from 'react';

export const getData = () => {
    return new Promise(function (resolve, reject) {
        fetch("http://localhost:3000/items")
            .then(response => response.json())
            .then(res => {
                let shows = res.shows;
                resolve(shows);
            })
            .catch(error => {
                reject(error);
            });

    });
};

export const updateData = (id,updatedObject) => {
    return fetch('http://localhost:3000/items/'+id, {
        method: 'put',
        body: JSON.stringify(updatedObject),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response)
    .then(response => response.json());

};

export const getFilteredData = (id) => {
    return new Promise(function (resolve, reject) {
        fetch('http://localhost:3000/items/'+id).then(response => response.json()).then(res => {
                let shows = res.data;
                resolve(shows);
            })
            .catch(error => {
                reject(error);
            });

    });
};
