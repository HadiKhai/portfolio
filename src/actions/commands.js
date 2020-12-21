import {
    SEND_CMD,
    COMMAND_NOT_FOUND,
    COMMAND_EMPTY,
    CLEAR_CMD,
    COMMAND_COMPLETED, DIRECTORY_NOT_FOUND, FILE_NOT_FOUND
} from "../types/action";
import {CAT, CD, CLEAR, DIR_NOT_FOUND, DOWNLOAD, HELP, HISTORY, IS_NOT_A_FILE, LS, NOT_FOUND} from "../types/commands";
import {changeDirectory} from "./directory";
import {DIRECTORIES, getBlob,httpClient} from "../config";

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

const sendHelpCommand = (content) => dispatch => {
    dispatch({
        type:COMMAND_COMPLETED,
        payload: {
            cmd: HELP,
            content
        }
    })
}

const sendCatCommand = (file) => (dispatch,getState) => {
        const content = getState().directory.content;
        let currentDirectory = getState().directory.currentDirectory;
        const root = 'root'

        if(content.includes(file) && file.endsWith('txt')) {
            if(currentDirectory.indexOf('/')!==-1) {
                currentDirectory = currentDirectory.replaceAll('/', '%2F')
            }
            let directory = `${root}%2F${currentDirectory}%2F${file}`

            if(currentDirectory==='') {
                 directory = `${root}%2F${file}`
            }
            const endpoint = `${DIRECTORIES}/${directory}/read`;
            httpClient.get(endpoint).then(res => {
                dispatch({
                    type: COMMAND_COMPLETED,
                    payload: {
                        cmd: CAT,
                        content:res.data,
                        error: false
                    }

                })
            })
        }
        else {
            dispatch({
                type: FILE_NOT_FOUND,
                payload: {
                    cmd: CAT,
                    content: IS_NOT_A_FILE,
                    dirOrFile:file,
                    error:true
                }
            })
        }

    }

const sendDownloadCommand = (file) => (dispatch,getState) => {
    const content = getState().directory.content;
    let currentDirectory = getState().directory.currentDirectory;
    const root = 'root'

    if(content.includes(file) && (file.endsWith('pdf') || file.endsWith('txt') || file.endsWith('jpeg'))) {
        if(currentDirectory.indexOf('/')!==-1) {
            currentDirectory = currentDirectory.replaceAll('/', '%2F')
        }
        let directory = `${root}%2F${currentDirectory}%2F${file}`

        if(currentDirectory==='') {
            directory = `${root}%2F${file}`
        }
        const endpoint = `${DIRECTORIES}/${directory}/download`;
        getBlob.get(endpoint).then(res => {
            const downloadUrl = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');

            link.href = downloadUrl;

            link.setAttribute('download', file); //any other extension

            document.body.appendChild(link);

            link.click();

            link.remove();


            dispatch({
                type: COMMAND_COMPLETED,
                payload: {
                    cmd: DOWNLOAD,
                    content: res.data,
                    error: false
                }
            })
        })

    }
    else {
        dispatch({
            type: FILE_NOT_FOUND,
            payload: {
                cmd: DOWNLOAD,
                content: IS_NOT_A_FILE,
                dirOrFile:file,
                error:true
            }
        })
    }

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
    if(dir==='..'){
        const index = currentDirectory.lastIndexOf('/')
            if(index===-1){
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
                dirOrFile:dir,
                error:true
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


export {sendCommand,sendEmptyCommand,sendCommandNotFound,sendClearCommand,sendHistoryCommand,sendLSCommand,sendCDCommand,sendCatCommand,sendDownloadCommand,sendHelpCommand};

