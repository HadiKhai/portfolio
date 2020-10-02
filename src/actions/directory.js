import {
    CHANGE_DIRECTORY,FETCH_DIRECTORY,
} from "../types/action";

import {DIRECTORIES} from "../config";
import {httpClient} from "../config/api";



const fetchDirectoryContent = () => (dispatch,getState) => {

    let dir = getState().directory.currentDirectory

    const root = 'root'

    if(dir.indexOf('/')!==-1) {
        dir = dir.replaceAll('/', '%2F')
    }
    const directory = `${root}%2F${dir}`

    const endpoint = `${DIRECTORIES}/${directory}`;

    httpClient.get(endpoint).then(res => {
        dispatch(fetchDirectoryContentSucceeded(res.data,dir))
    })
}

const fetchDirectoryContentSucceeded = (content,dir) => (
    {
        type: FETCH_DIRECTORY,
        payload: {
            content,
            directory:dir
        }
    })

const changeDirectory = (dir) => (dispatch) => {
    dispatch({
        type: CHANGE_DIRECTORY,
        payload: {
            directory:dir
        }
    })
    dispatch(fetchDirectoryContent())
}
export { fetchDirectoryContent,changeDirectory};
