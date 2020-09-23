import { FETCH_DIRECTORY_CONTENT_FAILED,FETCH_DIRECTORY_CONTENT_STARTED,FETCH_DIRECTORY_CONTENT_SUCCEEDED}from '../types/action/directory'

const initialState = {
    loading: false,
    content: [],
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_DIRECTORY_CONTENT_STARTED:
            return {
                ...state,
                loading: true
            };
        case FETCH_DIRECTORY_CONTENT_SUCCEEDED:
            return {
                ...state,
                loading: false,
                error: null,
                content: [...state.content, action.payload]
            };
        case FETCH_DIRECTORY_CONTENT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.err
            };
        default:
            return state;
    }
}
