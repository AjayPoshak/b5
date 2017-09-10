import * as actions from './AddBookActions'


export function fetchBookDetails(url) {
  return (dispatch) => {
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(actions.receiveBookDetails(json)))
      .catch((error) => dispatch(actions.errorBookDetails(error)));
  };
}
