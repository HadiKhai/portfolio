import {CHANGE_DIRECTORY} from "../types/action";

const initialStateCurrentDirectory = {
    directory: 'root'
}

export default (state = initialStateCurrentDirectory,action) => {
    switch(action.type) {
        case CHANGE_DIRECTORY:
            return {
                ...state,
                directory: action.payload
            }
        default:
            return state;
    }
}
