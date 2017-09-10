import * as types from './ActionTypes'

export function SearchFetching(){
    return {
        type: types.SEARCH_RESULTS_FETCHING
    }
}

export function SearchSuccess(data){
    return {
        type: types.SEARCH_RESULTS_SUCCESS,
        data
    }
}

export function SearchFailure(){
    return {
        type:types.SEARCH_RESULTS_FAILURE
    }
}
