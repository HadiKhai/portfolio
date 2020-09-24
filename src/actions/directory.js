import {
    CHANGE_DIRECTORY,
    COMMAND_FAILED,
    COMMAND_COMPLETED,
} from "../types/action";

import {DIRECTORIES} from "../config";
import httpClient from "../config/api";
import {LS} from "../types/commands";

const changeDirectory = (dir) => dispatch =>
    dispatch({
        type: CHANGE_DIRECTORY,
        payload: dir
    })

const fetchDirectoryContent = (dir) => dispatch => {
    const endpoint = `${DIRECTORIES}/${dir}`;

    httpClient.get(endpoint).then(res => {
        dispatch(fetchDirectoryContentSucceeded(res.data))
    })
}

const fetchDirectoryContentSucceeded = (content) => (
    {
        type: COMMAND_COMPLETED,
        payload: {
            content,
            cmd: LS,
            error: false
        }
    })


export {changeDirectory, fetchDirectoryContent};
