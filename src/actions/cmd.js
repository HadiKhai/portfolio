import { SEND_CMD } from "../types/action/cmd";

const sendCommand = (cmd,dir,status) => dispatch =>
    dispatch({
        type: SEND_CMD,
        payload: {
            cmd,
            dir,
            status
        }
    })

export {sendCommand};
