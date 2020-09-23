import axios from "axios"
import {
    CHANGE_DIRECTORY,
    FETCH_DIRECTORY_CONTENT_STARTED,
    FETCH_DIRECTORY_CONTENT_SUCCEEDED,
    FETCH_DIRECTORY_CONTENT_FAILED
} from "../types/action/directory";
import {DIRECTORIES} from "../config";
import httpClient from "../config/api";

const changeDirectory = (dir) => dispatch =>
    dispatch({
        type: CHANGE_DIRECTORY,
        payload: dir
    })

const fetchDirectoryContent = (dir) => dispatch => {
    dispatch(fetchDirectoryContentStarted())

    const endpoint = `${DIRECTORIES}/${dir}`;

    console.log(endpoint)
    httpClient.get(endpoint).then(res => {
        dispatch(fetchDirectoryContentSucceeded(res.data))
    }).catch(err => {
        console.log(err)
        dispatch(fetchDirectoryContentFailed(err))
    })
}

const fetchDirectoryContentStarted = () => ({
        type: FETCH_DIRECTORY_CONTENT_STARTED
    }
)

const fetchDirectoryContentSucceeded = ({content}) => (
    {
        type: FETCH_DIRECTORY_CONTENT_SUCCEEDED,
        payload: content
    })
const fetchDirectoryContentFailed = (err) => (
    {
        type: FETCH_DIRECTORY_CONTENT_FAILED,
        payload: err
    })


export {changeDirectory, fetchDirectoryContent};
