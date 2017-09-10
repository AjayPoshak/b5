import * as action from './Actions'

export function Searching(url, param){
    console.log(param)
    const urlParam = url+'?q='+param+'&key=AIzaSyBR3z81-RaGjVsxTZm7C_VzGGD2P2-yx-A'
    return (dispatch) => {
        fetch(urlParam)
            .then(response => response.json())
            .then(json => dispatch(action.SearchSuccess(json)))
            .catch(err => console.error(err))
    }
}
