import {combineReducers} from 'redux';
import films from './movieReducer';

const rootReducer = combineReducers({
    films
})

export default rootReducer;