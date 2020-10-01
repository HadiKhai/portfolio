import {
    SEND_CMD,
    COMMAND_NOT_FOUND,
    COMMAND_EMPTY,
    CLEAR_CMD,
    COMMAND_COMPLETED,
    CHANGE_DIRECTORY, LS_CMD, DIRECTORY_NOT_FOUND
} from "../types/action";
import {CD, CLEAR, DIR_NOT_FOUND, HISTORY, LS, NOT_FOUND} from "../types/commands";
import {changeDirectory} from "./directory";

const sendCommand = (cmd,args,status,show) => (dispatch,getState) =>{

    const dir = getState().directory.currentDirectory;
    dispatch({
        type: SEND_CMD,
        payload: {
            cmd,
            args,
            dir,
            status,
            show
        }
    })
}

const sendClearCommand = () => dispatch => {
    dispatch({
        type: CLEAR_CMD,
    })
    dispatch({
        type: COMMAND_COMPLETED,
        payload: {
            content: '',
            cmd: CLEAR
        }
    })
}

const sendLSCommand = () =>  (dispatch,getState) => {
    const content = getState().directory.content;

    dispatch({
        type:COMMAND_COMPLETED,
        payload: {
            cmd: LS,
            content
        }
    })
}

const sendHistoryCommand = () => (dispatch,getState) => {
    const history = getState().commands.map(data => data.cmd);

    dispatch({
        type: COMMAND_COMPLETED,
        payload: {
            content: history,
            cmd: HISTORY
        }
    })
}

const sendCDCommand = (dir) => (dispatch,getState) => {

    const content = getState().directory.content;
    const currentDirectory = getState().directory.currentDirectory;
    console.log(dir)
    if(dir==='..'){
        const index = currentDirectory.lastIndexOf('/')
        console.log(index)
            if(index==-1){
                dispatch(changeDirectory(''))
            }
            else{
                const newDir = currentDirectory.slice(0,index);
                dispatch(changeDirectory(newDir))
            }
    }
    else if(dir.endsWith('txt') || !content.includes(dir)){
        dispatch({
            type: DIRECTORY_NOT_FOUND,
            payload: {
                cmd: CD,
                content: DIR_NOT_FOUND,
                dir
            }
        })
        return
    }
    else{
        const newDir = `${currentDirectory}/${dir}`;
        dispatch(changeDirectory(newDir))
    }

    dispatch({
        type:COMMAND_COMPLETED,
        payload: {
            cmd: CD,
        }
    })
}

const sendCommandNotFound = (cmd) => dispatch => {
    dispatch({
        type: COMMAND_NOT_FOUND,
        payload: {
            content: NOT_FOUND,
            cmd
        }
    })
}

const sendEmptyCommand = () => dispatch => {
    dispatch({
        type: COMMAND_EMPTY
    })
}


export {sendCommand,sendEmptyCommand,sendCommandNotFound,sendClearCommand,sendHistoryCommand,sendLSCommand,sendCDCommand};

