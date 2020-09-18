import { SEND_CMD } from "../types/action";

const sendCommand = (cmd) => dispatch =>
    dispatch({
        type: SEND_CMD,
        payload: cmd
    })

export default sendCommand;
