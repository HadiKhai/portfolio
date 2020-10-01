import {SEND_CMD,CLEAR_CMD} from "../types/action";


export default (state = [] ,action) => {
    switch (action.type){
        case SEND_CMD:
            return [...state, action.payload];
        case CLEAR_CMD:
            return state.map(commands =>
                (
                    {
                        ...commands,
                        show: false
                    }
                  )
            )
        default:
            return state;
    }

}
