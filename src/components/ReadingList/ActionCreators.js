import * as actions from './Actions'

export function fetchingReadingData(url){
    return (dispatch, getState) => {
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((json) => dispatch(actions.readingListReceive(json)))
            .catch((err) => dispatch(actions.readingListError(error)))
    }
}
