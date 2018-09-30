import { SEARCHING, SEARCH_COMPLETE, SEARCH_ERROR } from '../constants';

let apiHelper;

export function fetchSearchResults(searchTerm, index = 0) {
    return function (dispatch) {
        dispatch(requestSearchResults(searchTerm))

        return apiHelper.search(searchTerm, index)
        .then(results => 
            dispatch(recieveSearchResults(searchTerm, results)), 
            err => 
            dispatch(searchError())
        );
    }
}

export function recieveSearchResults(searchTerm, results) {
    return {
        type: SEARCH_COMPLETE,
        searchTerm,
        results
    }
}

export function requestSearchResults(searchTerm){
    return {
        type: SEARCHING,
        searchTerm
    }
}

export function searchError(){
    return {
        type: SEARCH_ERROR
    }
}