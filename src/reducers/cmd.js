import {SEND_CMD} from "../types/action/cmd";

function insertAt(array, index, ...elementsArray) {
    array.splice(index, 0, ...elementsArray);
}


export default (state = [] ,action) => {
    switch (action.type){
        case SEND_CMD:
            return [...state, action.payload]
        default:
            return state;
    }

}

