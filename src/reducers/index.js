import { combineReducers } from 'redux';
import cmd from './cmd';
import directory from './directory';

export default combineReducers({
    cmd,
    directory
})
