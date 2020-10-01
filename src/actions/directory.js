import {
    CHANGE_DIRECTORY,
    COMMAND_FAILED,
    COMMAND_COMPLETED, FETCH_DIRECTORY,
} from "../types/action";

import {DIRECTORIES} from "../config";
import httpClient from "../config/api";
import {CD, LS} from "../types/commands";



const fetchDirectoryContent = () => (dispatch,getState) => {

    let dir = getState().directory.currentDirectory

    console.log(dir)
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
    console.log(dir)
    dispatch({
        type: CHANGE_DIRECTORY,
        payload: {
            directory:dir
        }
    })
    dispatch(fetchDirectoryContent())
}
export { fetchDirectoryContent,changeDirectory};
