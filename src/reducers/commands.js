import {SEND_CMD} from "../types/action";

export default (state = [] ,action) => {
    switch (action.type){
        case SEND_CMD:
            return [...state, action.payload]
        default:
            return state;
    }

}
