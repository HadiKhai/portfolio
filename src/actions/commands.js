import { SEND_CMD,COMMAND_NOT_FOUND,COMMAND_EMPTY} from "../types/action";
import {NOT_FOUND} from "../types/commands";

const sendCommand = (cmd,args,dir,status) => dispatch =>
    dispatch({
        type: SEND_CMD,
        payload: {
            cmd,
            args,
            dir,
            status
        }
    })

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
        type: COMMAND_EMPTY,
    })
}

export {sendCommand,sendEmptyCommand,sendCommandNotFound};

