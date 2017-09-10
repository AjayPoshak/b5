import * as types from './AddBookActionTypes'

export const initialState = {
    data: {},
    isAddBookLoading: false,
    isAddBookError: false
}
export function AddBook(state = initialState, action){
    switch(action.type){
        case types.ADD_BOOK_FETCHING:
            return { ...state, isAddBookLoading: true }

        case types.ADD_BOOK_RECEIVE:
            return { ...state, data: action.data, isAddBookLoading: false, isAddBookError: false }

        case  types.ADD_BOOK_FAILED:
            return {...state, isAddBookError: true}

        default:
            return state
    }
}
