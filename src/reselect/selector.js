import { createSelector } from 'reselect'

const getShows = (state,props) => state.shows;
export const getSearchTerm = (state,props) => props.match.params.id;

export const makeGetVisibleShows = () => createSelector(
    [getShows, getSearchTerm],
    (shows, searchTerm) => {
        //return shows.filter((show, index) => (show.title.toLowerCase().includes(searchTerm)))
        return shows.filter(show => `${show.title.toLowerCase()}`.indexOf((searchTerm).toLowerCase()) >=0)
    }
);