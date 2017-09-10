import * as types from './ActionTypes'

const initialState = {
    isSearchFetching: false,
    isSearchError: false,
    data: []
}

export function SearchData(state=initialState, action){
    switch(action.type){
        case types.SEARCH_RESULTS_FETCHING:
            return { ...state, isSearchFetching: true }

        case types.SEARCH_RESULTS_SUCCESS:
            console.log('Reducer ', action.data)
            return { ...state, data: action.data, isSearchFetching: false, isSearchError: false }

        case types.SEARCH_RESULTS_FAILURE:
            return { ...state, isSearchError: true }

        default:
            return state
    }
}
