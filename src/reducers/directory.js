import {CHANGE_DIRECTORY, FETCH_DIRECTORY} from "../types/action";

const initialStateCurrentDirectory = {
    currentDirectory:'',
    content:[]
}

export default (state = initialStateCurrentDirectory,action) => {
    switch(action.type) {
        case CHANGE_DIRECTORY:
            return {
                ...state,
                currentDirectory: action.payload.directory
            }
        case FETCH_DIRECTORY:{
            return {
                ...state,
                content: action.payload.content
            }
        }
        default:
            return state;
    }
}
