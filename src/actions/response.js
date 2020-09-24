import { COMMAND_COMPLETED } from "../types/action";

const sendResponse = (response,cmd) => dispatch =>
    dispatch({
        type: COMMAND_COMPLETED,
        payload: {
            content: response,
            cmd
        }
    })



export {sendResponse};
