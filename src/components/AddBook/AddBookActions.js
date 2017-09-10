import * as types from './AddBookActionTypes'

export function loadingBookDetails() {
    return {
        type: types.ADD_BOOK_FETCHING,
        isAddBookLoading: true
    }
}

export function receiveBookDetails(data){
    return {
        type: types.ADD_BOOK_RECEIVE,
        data
    }
}

export function errorBookDetails(err){
    return {
        type: types.ADD_BOOK_FAILED,
        isAddBookError: true
    }
}
