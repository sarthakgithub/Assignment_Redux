import { createSelector } from 'reselect';

const getShows = (state) => state.shows;
export const getSearchTerm = (state, props) => props.match.params.id;
export const makeGetVisibleShows = () => createSelector(
    [getShows, getSearchTerm],
    (shows, searchTerm) => shows.filter((show) => `${show.title.toLowerCase()}`.indexOf((searchTerm).toLowerCase()) >=0)
);

