import { combineReducers } from 'redux';
import commands from './commands';
import directory from './directory';
import responses from './responses';

export default combineReducers({
    commands,
    responses,
    directory
})
