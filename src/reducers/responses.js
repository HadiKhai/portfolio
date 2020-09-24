import { COMMAND_COMPLETED,COMMAND_FAILED,COMMAND_NOT_FOUND,COMMAND_EMPTY}from '../types/action'

export default  (state = [], action) => {
    switch (action.type) {
        case COMMAND_COMPLETED:
            return[
                ...state,
                {
                    error: action.payload.error,
                    cmd: action.payload.cmd,
                    content: action.payload.content
                }

            ];
        case COMMAND_FAILED:
            return [
                ...state,
                {
                    cmd: action.payload.cmd,
                    error: action.payload.error
                }
            ];
        case COMMAND_NOT_FOUND:
            return [
                ...state,
                {
                    cmd: action.payload.cmd,
                    content: action.payload.content,
                    error: true
                }
            ];
        case COMMAND_EMPTY:
            return [
                ...state,
                {
                    cmd: '',
                    content: '',
                    error: true
                }
            ];
        default:
            return state;
    }
}
