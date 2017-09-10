import * as types from './ActionTypes'

const initialState = {
    readingList: [],
    isFetching: false,
    isError: false
}

export function readingList (state=initialState, action){
    switch(action.type){
        case types.FETCH_READING_LIST:
            return {...state, isFetching: true}
        case types.RECEIVE_READING_LIST:
            return {...state, data: action.data, isFetching:false, isError: false}
        case types.ERROR_READING_LIST:
            return {...state, isFetching: false, isError: true}
        default:
            return state
    }
}

export default readingList
