import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import reducer from '../reducers/mainreducer';

//we connect store to the reducer
let store = createStore(reducer,applyMiddleware(logger));

export default store;